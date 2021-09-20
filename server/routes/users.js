const express = require('express')
const log = require('../logger')
const db = require('../db/users')
const { getUserRoles } = require('./auth')

const router = express.Router()

module.exports = router

router.post('/', async (req, res) => {
  const { firstName, lastName, gardenId, username, auth0Id, email } = req.body

  const user = {
    firstName,
    lastName,
    gardenId,
    username,
    email,
    auth0Id
  }

  try {
    const addedId = await db.createUser(user)
    log('user: ', addedId, 'added')
  } catch (err) {
    log(err.message)
    res.status(500).json({
      error: {
        title: 'failed: user exists'
      }
    })
  }

  try {
    const addedUser = await db.getUsersByAuth(user.auth0Id)
    res.json(addedUser)
    return null
  } catch (err) {
    log(err.message)
    res.status(500).json({
      error: {
        title: 'failed to retrieve added user'
      }
    })
  }
})

router.get('/:id', async (req, res) => {
  const { id } = req.params
  try {
    const roleName = await getUserRoles(id)
    const user = await db.getUsersByAuth(id)
    res.json({ ...user, isAdmin: roleName === 'admin' })
    return null
  } catch (err) {
    log(err.message)
    res.status(500).json({
      error: {
        title: 'failed to retrieve user'
      }
    })
  }
})
