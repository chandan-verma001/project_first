import  express  from "express";
import { create,getall,getone,getdelet,putup,getdata} from '../controller/user.controller.js'
import multer from "multer";


const storage = multer.diskStorage({
 
    destination: function (req, file, cb) {
      console.log("==hello");
      cb(null,process.cwd()+'/uploads')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix =file.fieldname +'_'+ Date.now() + '-' + Math.round(Math.random() * 1E9)+file.originalname;
      req.body.profile=uniqueSuffix
      cb(null,uniqueSuffix);
    }
  })
const upload = multer({storage:storage})


const userRouts = (app) =>{
    let routes = express.Router()
    routes.post('/get',getdata)
    routes.post('/create',upload.single('profile'),create)
    routes.get('/getall',getall)
    routes.get('/getone/:name',getone)
    routes.delete('/getdelet/:id',getdelet)
    routes.put('/putup/:id',putup)

    app.use("/productss",routes)
}

export default userRouts
