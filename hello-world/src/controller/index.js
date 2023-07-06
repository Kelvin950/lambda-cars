const   Car  =  require('../db')




exports.getController =  async(req  , res)=>{

 const  {id} = req.params ; 
 
 console.log(id)
  

const car =  await Car.getCar({

    TableName:   process.env.TableName  ,
     Key:{
        id 
     } 
})


res.send({
    success:true ,data:{
        car
    }
})



}



exports.getCarsController = async (req, res) => {

  const car = await Car.getCars({
    TableName: process.env.TableName,
 
  });

  res.send({
    success: true,
    data: {
      car
    },
  });
};



exports.createController = async (req, res) => {


  const car = await Car.createCar({
    TableName: process.env.TableName,
     Item:  req.body,
  });

  res.send({
    success: true,
    data: {
      car,
    },
  });
};

exports.deleteCarController = async (req, res) => {
  const { id } = req.param;

  const car = await Car.deleteCar({
    TableName: process.env.TableName,
    Key: {
      id
    },
  });

  res.send({
    success: true,
    data: {
      car,
    },
  });
};

// export const uodateCarController = async (req, res) => {
//   const { id } = req.param;

//   const car = await Car.updateCar({
//     TableName: process.env.TableName,
//     Key: {
//       id,
//     },
//   });

//   res.send({
//     success: true,
//     data: {
//       car,
//     },
//   });
// };