import express from 'express';
const router = express.Router();
import userController from '../controllers/userController.js';

//Public Route
console.log("44444444444444")
router.post('/register', userController.userRegistration)

//Protected Route

export default router;