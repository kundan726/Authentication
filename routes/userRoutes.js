import express from "express";
const router = express.Router();
import userController from "../controllers/userController.js";
import authenticUser from "../middleware/userAuthMiddleware.js";

// authenticating
router.post("/changePassword", authenticUser);

//Public Route
router.post("/register", userController.userRegistration);
router.post("/login", userController.userLogin);

//Protected Route
router.post("/changePassword", userController.userChangePassword);

export default router;
