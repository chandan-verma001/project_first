import  express  from "express";
import db from "./src/db/index.js"
import cors from "cors"
import {create,getall,getone,getdelet,putup,getdata} from './src/controller/user.controller.js'
import { superform,finddata,destroygetdata} from './src/controller/superform.js'

const app = express();
const PORT = 3500;
app.use(cors('*'))

app.use(express.json())
app.post('/get',getdata)
app.post('/create',create)
app.get('/getall',getall)
app.get('/getone/:name',getone)
app.delete('/getdelet/:id',getdelet)
app.put('/putup/:id',putup)
app.post('/superform',superform)
app.get('/getfinddata',finddata)
app.delete('/destroygetdata/:email',destroygetdata)




app.listen(PORT, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});