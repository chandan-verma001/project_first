import db from "../db/index.js"

const createdata = async (req,res)=>{
    try {
        let data = req.body
        let result = await db.product.create(data)
       res.status(200).send({result})
    } catch (error) {
        res.status(500).send(error.meaasge)
    }
}

const getalldata = async (req,res)=>{
    try {
        let result = await db.product.findAll()
       res.status(200).send({result})
    } catch (error) {
        res.status(500).send(error.meaasge)
    }
}

export {
    getalldata,createdata
}

