import { connectToDB, socketIoConfig } from "../../../config/index.js";
import { Constant } from "../../index.js";


const {envVariables} = Constant; 
const {backendPort} = envVariables; 
const {server} = socketIoConfig;

function databaseConnection() {
 connectToDB().then(() => {
    server.listen(backendPort, () => {
        console.log(`Your Server Successfully Running on http://localhost:${backendPort}`)
    })
 }).catch((error) => {
    console.log(`Error While Connecting Database: ${error?.message}`)
 }).finally(() => {
    console.log(`Successfully Connected With Database`)
 })
}

export default databaseConnection; 