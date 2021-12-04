var express = require('express');
var app = express();
const path = require('path');
app.use(express.json());
app.use(express.urlencoded());

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname+'/html/index.html'));
})

app.listen(8000,()=>console.log('Servidor corriendo en el puerto 8000'))