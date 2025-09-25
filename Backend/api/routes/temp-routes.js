import express from 'express';
import * as tempController from './../controllers/temp-controller.js'

// Initialise the Router
const Router = express.Router();

// For Post
Router.route('/')
    .post(tempController.post);


    
Router.route('/:id')
    .get(tempController.getWatchlist)
    .delete(tempController.remove);
 
    
// For Get    
Router.route('/')
    .get(tempController.get);

// // For Get Todo with ID    
// Router.route('/:id')
//     .get(userController.index);    

// // Update the Todo 
// Router.route('/:id')
//     .put(userController.update);    

// // Delete by ID    
// Router.route('/:id')
//     .delete(userController.remove);     
export default Router;    