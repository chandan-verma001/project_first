import db from "../db/index.js";

 

const superform = async(req,res) =>{
    try {
        let data = req.body
        let result = await db.superform.findOne({where :{email:data.email}})
        if(result!=null){
            res.status(200).send("email is alrady exist")
        }
        else{
            let result = await db.superform.create(data)
        res.status(200).send({message:"submit successfull",data:result,status:200})
        }
    } catch (error) {
        res.status(500).send(result)
    }
}



const finddata = async(req,res) =>{
    try {
        let result= await db.superform.findAll()
        res.status(200).send({message:"okkk",data:result})
    } catch (error) {
        res.status(500).send(error.message)
    }
}



const destroygetdata = async (req,res)=>{
    try {
        let data = req.params.email
        let result = await db.superform.destroy({where:{email:data}})
        res.status(200).send({message:"data deleted",data:result,status:200})
    } catch (error) { 
        res.status(500).send({message:"something went wrong"})
    }
}



export {
    superform,finddata,destroygetdata
}