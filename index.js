var express = require('express');
var app = express();
const path = require('path');
app.use(express.json());
app.use(express.urlencoded());

var usuruario = {
    nombre:'',
    apellido:'',
    id:''
};

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname+'/html/index.html'));
});

app.get('/crearEntrada',(rec,res)=>res.sendFile(path.join(__dirname+ '/html/crearEntrada.html')));

app.post('/envioDeDatos',(req,res)=>{
    usuruario.nombre=req.body.nombre;
    usuruario.apellido=req.body.apellido;
    usuruario.id=req.body.id;
    res.sendFile(path.join(__dirname+'/html/index.html'));
});

app.get('/consultarDatos',(req,res)=>{
    if(usuruario.nombre!=='' && usuruario.apellido!=='' &&usuruario.id!==''){
        res.json(usuruario);
    }else{
        res.send('Datos no ingresados');
    }
});

app.get('/eliminarDatos',(req,res)=>{
    if(usuruario.nombre !=='' && usuruario.apellido !== '' && usuruario.id !== ''){
        usuruario.nombre = '';
        usuruario.apellido = '';
        usuruario.id = '';
        res.sendFile(path.join(__dirname+'/html/datosEliminados.html'));
    }else{
        res.send("Datos no ingresados")
    }
})

app.listen(8000,()=>console.log('Servidor corriendo en el puerto 8000'));