const express =  require('express');
require('express-async-errors')
const app =  express() ;

require('dotenv').config()

const  {carRouter} =  require('./routes/index')



app.use(express.json()) ;

app.get("/casual/ic", function (req, res) {
  res.send({
    cook: "cool",
 
  });
});

module.exports = app;

app.use(carRouter) ;


app.use((err , req , res, next)=>{

 
console.log(err)
    res.send({


        message : err.message || 'null'   })
 
    
})

