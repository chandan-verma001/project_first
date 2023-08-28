import  express  from "express";
import { findone,findall,destroygetdata } from '../controller/practice.controller.js'

const practiceroutes = (app)=>{
    let routes = express.Router()
    routes.post('/findone',findone)
    routes.get('/findall',findall)
    routes.delete('/destroygetdata/:email',destroygetdata)
    app.use("/products",routes)
}
export default practiceroutes