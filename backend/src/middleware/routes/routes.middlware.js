import { Constant } from "../../helper/index.js";
import { authRoutes, userRoutes, messageRoutes } from "../../routes/index.js";

const { apisRoutes } = Constant;
const { BASE_URL } = apisRoutes;

const routesMiddleware = {
  auth: (app) => {
    app.use(BASE_URL, authRoutes);
  },
  user: (app) => {
    app.use(BASE_URL, userRoutes);
  },
  message: (app) => {
    app.use(BASE_URL, messageRoutes);
  },
};

export default routesMiddleware;
