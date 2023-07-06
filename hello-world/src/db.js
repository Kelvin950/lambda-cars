const {DynamoDBClient} = require('@aws-sdk/client-dynamodb') ;
const {DynamoDBDocumentClient , PutCommand , GetCommand , UpdateCommand , DeleteCommand , ScanCommand} =  require('@aws-sdk/lib-dynamodb') ; 

const client = new DynamoDBClient({
  region:  'us-east-1',
  credentials: {
    accessKeyId:  process.env.ACCESSKEY,
    secretAccessKey: process.env.SECRETKEY,
  },
});




const docclient = DynamoDBDocumentClient.from(client , {
  marshallOptions:{
    removeUndefinedValues:true
  }
})  ;



exports.createCar =  async (param)=>{
 
    const command =  new PutCommand(param)

    const response =  await docclient.send(command) ;
    

    return response


}


exports.getCar =  async(param)=>{

    const command = new GetCommand(param) ;

return  await  docclient.send(command) ;
}


 exports.updateCar =  async(param)=>{
     
const command =  new UpdateCommand(param) ;
return await docclient.send(command) ;

}


exports.deleteCar =  async(param)=>{


    const command  =  new DeleteCommand(param) ;

    return await docclient.send(command)
}

exports.getCars = async(param)=>{


    const command =  new ScanCommand(param) ;

    return  await  docclient.send(command) ;
}