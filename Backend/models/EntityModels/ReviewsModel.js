const {Model} = require('sequelize');

module.exports =(sequelize, DataTypes) =>{

    /* **** Model Definition Parameters ***
    * There can be many reviews against one product and 
    * each review will have following:
    * A unique Id
    * A Integer Rating ranging between 0 and 5
    * and a secondary key 
    */

    // creating class model to defie associationa
    // this model will also elaborate the cardinality
    class Review extends Model {

        static associate(models){
            this.belongsTo(models.Product,{ foreignKey:'Id' });
        }
    }

    //intiaiing class model 
    Review.init({
            id:{
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey:true,
                allowNull:false
            },
            review_id:{
                type: DataTypes.UUID,
            },
            rating:{
                type: DataTypes.INTEGER
            }
        },
        // Extra tbale options for model development 
        {
            sequelize,
            modelName: 'Review',
            tableName:'Review'
        }
    );// review model ends

    return Review; //exported model defintion
}; // class ends








// module.exports = (sequelize, DataTypes) =>{
//     const Review = sequelize.define("products",
//     //model meta deta
//     {
//         review_id:{
//             type:DataTypes.UUID,
//             defaultValue: DataTypes.UUIDV4,
//         },
//         rating:DataTypes.INTEGER,
//         description: DataTypes.TEXT,
//     })

//     return Review;
// }