const express = require('express');
const cors = require('cors');

const app = express();
const DbOrigin= process.env.DB_ORIGIN || "localhost";
const Port = process.env.PORT || 8000;
const CorsPort = process.env.CORS_PORT || 8001;

//middleWares
const corOptions ={origin: `https://${DbOrigin}:${CorsPort}/`,};
app.use(cors({corOptions}));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//main

app.listen(Port,()=>{
    console.log(`Server Running on Port: ${Port}`);
})