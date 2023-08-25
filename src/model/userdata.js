const userdata= (sequelize,DataTypes)=>{
    return(
        sequelize.define(
            "userdata",{
                name : {
                    type: DataTypes.STRING
                },
                email : {
                    type: DataTypes.STRING
                },
                phone : {
                    type: DataTypes.STRING
                },
                gender : {
                    type: DataTypes.STRING
                },
                password : {
                    type: DataTypes.STRING
                }
            }
        )
    )
}
export{
    userdata
}