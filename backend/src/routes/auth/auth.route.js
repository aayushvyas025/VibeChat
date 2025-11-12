import express from "express";
import { Constant } from "../../helper/index.js";
import { authControllers } from "../../controller/index.js";

const { apisRoutes } = Constant;
const { auth } = apisRoutes;
const { LOGIN, LOGOUT, SIGNUP, BASE_URL } = auth;
const { loginController, logoutController, signupController } = authControllers;
const router = express.Router();

router.post(SIGNUP(BASE_URL), signupController);
router.post(LOGIN(BASE_URL), loginController);
router.post(LOGOUT(BASE_URL), logoutController);

export default router;
