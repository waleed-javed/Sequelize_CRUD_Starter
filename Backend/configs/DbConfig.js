module.exports = {
    HOST: process.env.HOST,
    USER:process.env.USER,
    PASSOWRD:process.env.PASSOWRD,
    DB:process.env.DB,
    DIALECT: process.env.DIALECT,
    
    pool:{
        max:5,
        min:0,
        acquire: 30000,
        idle: 10000,
    }
}