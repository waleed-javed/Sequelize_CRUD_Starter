module.exports = (sequelize, DataTypes) =>{
    const Product = sequelize.define("products",
    //model meta deta
    {
        id:{
            type:DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull:false,
        },
        title:{
            type: DataTypes.STRING,
            allowNull: false,       
        },
        price:DataTypes.INTEGER,
        description: DataTypes.TEXT,
    })

    return Product;
}