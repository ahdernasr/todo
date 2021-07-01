import express from 'express'

import { getTodos, createTodos, updateTodos, deleteTodos } from '../controllers/todos.js'
const router = express.Router();

router.get('/', getTodos)
router.post('/', createTodos)
router.patch('/', updateTodos)
router.delete('/', deleteTodos)

export default router;