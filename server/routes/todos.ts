import Router from 'express'
import * as db from '../db/db'

const router = Router()

//GET 'api/v1/todos'
router.get('/', async (req, res) => {
  try {
    const todos = await db.getTodos()
    res.json(todos).status(200)
  } catch (e) {
    console.error(`Database error ${e}`)
    res.sendStatus(500)
  }
})
