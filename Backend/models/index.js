import dbConfig from "../configs/dbConfig";
import { Sequelize, DataTypes } from "sequelize";
import {ProductsModel} from './EntityModels/productsModels';
import {ReviewModel} from './EntityModels/productsModels';

//construct DB config instance
const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSOWRD,
    {
        host: dbConfig.HOST,
        dialect: dbConfig.DIALECT,
        // usefull for lambda integrated execution
        pool:{
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle
        }
    }
);

// authenticate the connection
sequelize.authenticate()
.then(() => {
    console.log('Success: Connection Established To Database Server!')
})
.catch(error => {
    console.error(`Error: ${error}`);
})

//setup the db object
const db ={}
db.Sequelize= Sequelize //Constructor
db.sequelize= sequelize //instance
// table Models
db.products = ProductsModel(sequelize,DataTypes)
db.products = ReviewModel(sequelize,DataTypes)

//sunc the changes
db.sequelize.sync({force:false})
.then(() => {console.log('Re-sync: done!')})
.catch( error => {console.warn(`Error: ${error}`)})

export default db;