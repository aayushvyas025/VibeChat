import express from "express";
import { Constant } from "../../helper/index.js";
import { authControllers } from "../../controller/index.js";

const { apisRoutes } = Constant;
const { auth} = apisRoutes;
const { LOGIN, LOGOUT, SIGNUP } = auth;
const { login, logout, signup } = authControllers;
const router = express.Router();

router.post(SIGNUP, signup);
router.post(LOGIN, login);
router.post(LOGOUT, logout);

export default router;
