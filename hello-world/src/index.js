const express =  require('express');
const app =  express() ;



app.get('/'  ,(req , res)=>{


    res.send({
        status:res.statusCode , 
        message: 'lamda'
    })


})


 module.exports = app  ;