const commonMiddleware = {
    jsonParser:(app, express) => {
        app.use(express.json());
    }
}

export default commonMiddleware; 

