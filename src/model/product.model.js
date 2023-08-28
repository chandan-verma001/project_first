const product = (sequelize,DataTypes)=>{
    return(
        sequelize.define(
            "product",{
                name : {
                    type: DataTypes.STRING
                },
                price : {
                    type: DataTypes.STRING
                },
                image : {
                    type: DataTypes.STRING
                },
            }
        )
    )
}
export{
    product
}