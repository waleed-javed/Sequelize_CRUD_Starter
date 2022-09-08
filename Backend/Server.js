const express = require('express');
const cors = require('cors');

//initial setup for server configurations
const app = express();
const DB_ORIGIN= process.env.DB_ORIGIN || "localhost";
const PORT = process.env.PORT || 8000;
const CORS_PORT = process.env.CORS_PORT || 8001;

//middleWares
const corOptions ={origin: `https://${DB_ORIGIN}:${CORS_PORT}/`,};
app.use(cors({corOptions}));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//App Request Routes
app.get('/',(req, res)=>{
   res.json("Testing Call Successfull!");
});

//Listen
app.listen(PORT,()=>{console.log(`Server Running on Port: ${PORT}`);});