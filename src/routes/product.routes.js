import express from "express";
import multer from "multer";
import { createdata, getalldata } from "../controller/product.controller.js";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, process.cwd() + "/uploads");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix =
      file.fieldname +
      "_" +
      Date.now() +
      "-" +
      Math.round(Math.random() * 1e9) +
      file.originalname;
    req.body.image = uniqueSuffix;
    cb(null, uniqueSuffix);
  },
});
const upload = multer({ storage: storage });

const products = (app) => {
  let routes = express.Router();
  routes.post("/create", upload.single("image"), createdata);
  routes.get("/findall", getalldata);
  
  app.use("/product", routes);

};

export default products;
