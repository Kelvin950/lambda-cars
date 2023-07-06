const express =  require('express') ;
const Router =  express.Router() ;
const controller =  require('../controller/index')


Router.route('/').get(controller.getCarsController)
.post(controller.createController);


Router.route('/:id').get(controller.getController).delete(controller.deleteCarController);







module.exports= {carRouter: Router}