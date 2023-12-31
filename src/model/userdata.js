const register= (sequelize,DataTypes)=>{
    return(
        sequelize.define(
            "register",{
                profile : {
                    type: DataTypes.STRING
                },
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
    register
}