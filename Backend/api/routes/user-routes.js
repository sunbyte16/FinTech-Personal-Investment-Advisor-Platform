import express from 'express';
import * as userController from './../controllers/user-controller.js'

// Initialise the Router
const Router = express.Router();

// For Post
Router.route('/')
    .post(userController.post);

// Login and signup    
Router.route('/login')
    .post(userController.login);
Router.route('/signup')
    .post(userController.signup);    
    
// For Get    
Router.route('/')
    .get(userController.get);

// For Get Todo with ID    
Router.route('/:id')
    .get(userController.index);    

// Update the Todo 
Router.route('/:id')
    .put(userController.update);    

// Delete by ID    
Router.route('/:id')
    .delete(userController.remove);     
export default Router;    