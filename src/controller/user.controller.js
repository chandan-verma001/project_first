import db from "../db/index.js"
const create=async(req,res)=>{
    try {
        let exist = req.body.email
        let result = await db.userdata.findOne({where:{email:exist}})
        if(result!=null){
            res.status(200).send("email is already exist")
        }
        else{
            let data = req.body
            let result = await db.userdata.create(data)
            res.status(200).send(result)
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

const putup=async(req,res)=>{
    try {
        let data = req.params.id
        let result = await db.userdata.update({name:req.body.name},{where:{id:data}})
        res.status(200).send(result)
    } catch (error) {
        res.status(500).send(error.message)
    }
}

const getall=async(req,res)=>{
    try {
        let result = await db.userdata.findAll()
        res.status(200).send(result)
    } catch (error) {
        res.status(500).send(error.message)
    }
}

const getone=async(req,res)=>{
    try {
        let data = req.params.name
        let result = await db.userdata.findOne({where:{name:data}})
        res.status(200).send(result)
    } catch (error) {
        res.status(500).send(error.message)
    }
}

const getdelet=async(req,res)=>{
    try {
        let data = req.params.id
        let result = await db.userdata.destroy({where:{id:data}})
        res.status(200).send(result)
    } catch (error) {
        res.status(500).send(error.message)
    }
}
const getdata = async (req,res)=>{
    try {
        let data = req.body;
        console.log("i am here");
        let result = await db.userdata.findOne({where:{email:data.email}})
       
        if(result.password===data.password){
            res.status(200).send({message:"you have login successfully"});
        }
        else{
            res.status(500).send({message:"check your email and passowrd"})
        }
    } catch (error) {
        
    }
}




export {
    create,getall,getone,getdelet,putup,getdata
}

