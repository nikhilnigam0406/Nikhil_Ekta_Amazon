require("dotenv").config();
const  express = require("express");
const app = express();
const port = 8085;
app.listen(port,()=>{
    console.log(`port is running on ${port}`);

});