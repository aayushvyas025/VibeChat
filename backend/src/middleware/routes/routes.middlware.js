import { Constant } from "../../helper/index.js";
import {
  authRoutes,
  conversationRoutes,
  messageRoutes,
} from "../../routes/index.js";

const { apisRoutes } = Constant;
const { BASE_URL } = apisRoutes;

const routesMiddleware = {
  auth: (app) => {
    app.use(BASE_URL, authRoutes);
  },
  conversation: (app) => {
    app.use(BASE_URL, conversationRoutes);
  },
  message: (app) => {
    app.use(BASE_URL, messageRoutes);
  },
};

export default routesMiddleware;
