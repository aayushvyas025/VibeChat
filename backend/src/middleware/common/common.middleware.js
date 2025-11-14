import cookieParser from "cookie-parser";
const commonMiddleware = {
    jsonParser:(app, express) => {
        app.use(express.json());
    },
    parseCookies:(app) => {
        app.use(cookieParser())
    }
}

export default commonMiddleware; 

