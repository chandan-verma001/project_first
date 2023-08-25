const superform= (sequelize,DataTypes)=>{
    return(
        sequelize.define(
            "superforms",{
                name : {
                    type: DataTypes.STRING
                },
                email : {
                    type: DataTypes.STRING
                },
                phone : {
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
    superform
}