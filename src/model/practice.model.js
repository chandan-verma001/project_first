const practice= (sequelize,DataTypes)=>{
    return(
        sequelize.define(
            "practice",{
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
    practice
}
