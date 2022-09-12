const {Model} = require('sequelize');

module.exports =(sequelize, DataTypes) =>{

    // creating class model to defie associationa
    // this model will also elaborate the cardinality
    class Product extends Model {

        static associate(models){
            this.hasMany(models.Review,{ foreignKey:'review_id' });
        }
    }

    //intiaiing class model 
    Product.init({
            Id:{
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                allowNull:false,
                primaryKey:true
            },
            product_title:{
                type: DataTypes.STRING,
            },
            product_price:{
                type: DataTypes.INTEGER,
                allowNull: false
            }
        },
        {
            sequelize,
            modelName:'Product',
            tableName:'Product',            
        }
    );

    return Product; //exported model defintion
}; // class ends



// module.exports = (sequelize, DataTypes) =>{
//     const Product = sequelize.define("products",
//     //model meta deta
//     {
//         id:{
//             type:DataTypes.UUID,
//             defaultValue: DataTypes.UUIDV4,
//             allowNull:false,
//         },
//         title:{
//             type: DataTypes.STRING,
//             allowNull: false,       
//         },
//         price:DataTypes.INTEGER,
//         description: DataTypes.TEXT,
//     })

//     return Product;
// }