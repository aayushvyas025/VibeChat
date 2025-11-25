import cookieParser from "cookie-parser";
import { Constant, servingStaticFrontend } from "../../helper/index.js";
import cors from "cors";

const { envVariables } = Constant;
const { frontendUrl, nodeEnvironment } = envVariables;

const commonMiddleware = {
  jsonParser: (app, express) => {
    app.use(express.json());
  },
  parseCookies: (app) => {
    app.use(cookieParser());
  },
  corsConnection: (app) => {
    app.use(
      cors({
        origin: frontendUrl,
        credentials: true,
      })
    );
  },
  servedFrontendStatically: (app) => {
    if (nodeEnvironment !== "development") {
      servingStaticFrontend(app);
    }
  },
};

export default commonMiddleware;
