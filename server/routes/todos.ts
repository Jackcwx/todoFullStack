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

//GET 'api/v1/todos/:id'
router.get('/:id', async (req, res) => {
  const id = Number(req.params.id)
  try {
    const todo = await db.getTodoById(id)
    res.json(todo).status(200)
  } catch (e) {
    console.error(`Database error ${e}`)
    res.sendStatus(500)
  }
})

//POST 'api/v1/todos/'
router.post('/', async (req, res) => {
  const newTodo = req.body
  try {
    await db.addTodo(newTodo)
    res.sendStatus(200)
  } catch (e) {
    console.error(`Database error ${e}`)
    res.sendStatus(500)
  }
})

//DEL 'api/v1/todos/:id'
router.delete('/:id', async (req, res) => {
  const id = Number(req.params.id)
  try {
    await db.deleteTodo(id)
    res.sendStatus(200)
  } catch (e) {
    console.error(`Database error ${e}`)
    res.sendStatus(500)
  }
})

//PATCH 'api/v1/todos/completed/:id
router.patch('completed/:id', async (req, res) => {
  const id = Number(req.params.id)
  try {
    await db.updatedAsCompleted(id)
    res.sendStatus(200)
  } catch (e) {
    console.error(`Database error ${e}`)
    res.sendStatus(500)
  }
})

//PATCH 'api/v1/todos/not-completed/:id
router.patch('not-completed/:id', async (req, res) => {
  const id = Number(req.params.id)
  try {
    await db.updatedAsNotCompleted(id)
    res.sendStatus(200)
  } catch (e) {
    console.error(`Database error ${e}`)
    res.sendStatus(500)
  }
})

export default router
