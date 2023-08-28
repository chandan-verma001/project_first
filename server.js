import  express  from "express";
import db from "./src/db/index.js"
import cors from "cors"
import userRouts from "./src/routes/user.routes.js";
import practiceroutes from "./src/routes/practice.routes.js";
import products from "./src/routes/product.routes.js";
// import { create,getall,getone,getdelet,putup,getdata} from './src/controller/user.controller.js'
// import { findone,findall,destroygetdata } from './src/controller/practice.controller.js'

const app = express();
const PORT = 3500;
app.use(cors('*'))
app.use('/static',express.static('uploads'))

app.use(express.json())
userRouts(app)
practiceroutes(app)
products(app)

// app.post('/get',getdata)
// app.post('/create',create)
// app.get('/getall',getall)
// app.get('/getone/:name',getone)
// app.delete('/getdelet/:id',getdelet)
// app.put('/putup/:id',putup)



// app.post('/superform',findone)
// app.get('/getfinddata',findall)
// app.delete('/destroygetdata/:email',destroygetdata)




app.listen(PORT, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});