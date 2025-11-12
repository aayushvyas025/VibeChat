import express from "express";
import { Constant } from "../../helper/index.js";
import { authControllers } from "../../controller/index.js";

const { apisRoutes } = Constant;
const { auth,BASE_URL } = apisRoutes;
const { LOGIN, LOGOUT, SIGNUP } = auth;
const { login, logout, signup } = authControllers;
const router = express.Router();

router.post(SIGNUP(BASE_URL), signup);
router.post(LOGIN(BASE_URL), login);
router.post(LOGOUT(BASE_URL), logout);

export default router;
