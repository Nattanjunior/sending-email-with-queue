import express from 'express'
import UserController from '../app/controllers/UserController.js'

const userController = new UserController();

const router = express.Router()

router.post('/users', (req, res) => userController.store(req, res))
router.get('/hello', (req, res) => res.json({ message: 'hello' }))

export default router