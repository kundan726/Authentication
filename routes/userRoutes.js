import express from 'express';
const router = express.Router();
import userController from '../controllers/userController.js';

//Public Route
console.log("44444444444444")
router.post('/register', userController.userRegistration);
router.post('/login', userController.userLogin)


//Protected Route

export default router;