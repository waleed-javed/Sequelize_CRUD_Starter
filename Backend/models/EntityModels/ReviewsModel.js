module.exports = (sequelize, DataTypes) =>{
    const Review = sequelize.define("products",
    //model meta deta
    {
        id:{
            type:DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
        },
        rating:DataTypes.INTEGER,
        description: DataTypes.TEXT,
    })

    return Review;
}