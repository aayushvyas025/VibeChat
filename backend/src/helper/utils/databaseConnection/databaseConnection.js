import { connectToDB } from "../../../config/index.js";
import Constant from "../../constant/constant.js";

const {envVariables} = Constant; 
const {backendPort} = envVariables; 

function databaseConnection(app) {
 connectToDB().then(() => {
    app.listen(backendPort, () => {
        console.log(`Your Server Successfully Running on http://localhost${backendPort}`)
    })
 }).catch((error) => {
    console.log(`Error While Connecting Database: ${error?.message}`)
 }).finally(() => {
    console.log(`Successfully Connected With Database`)
 })
}

export default databaseConnection; 