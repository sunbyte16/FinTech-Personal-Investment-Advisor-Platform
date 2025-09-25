import * as tempService from './../services/tempService.js';
import temp from '../models/temp.js'




const setResponse = (obj, response) =>{
    response.status(200);
    response.json(obj);
}

const errorResponse = (err, response) =>{
    response.status(500);
    response.json({error: err.message});
}

// export const index = async (req,res) =>{
//     try{
//         // Store ID
//         const id = req.params.id;
//         // Pass ID to index function
//         const availableUser = await tempService.index(id);
//         setResponse(availableUser,res);
//     }
//     catch(error){
//         errorResponse(error,res);
//     }
// }



//get all watclist for an user

export const getWatchlist = async (request,response) => {
    try{
        const id = request.params.id
        const watchlist = await tempService.getWatchlist(id);
        setResponse(watchlist,response); // if above promise is successfull
    } catch(error){
        errorResponse(error,response); // if above promise is not successfull
    }
    
}


// remove function to call the remove function in service layer, this function will delete a task item by ID.
export const remove = async (request,response) => {
    try{
        const id = request.params.id;
        const tasks = await tempService.remove(id);
        setResponse(tasks,response); // if above promise is successfull
    } catch(error){
        errorResponse(error,response); // if above promise is not successfull
    }
    
}


export const get = async (req,res) =>{
    try{
        // Find method in service helps to get all todos
        const availableUser = await tempService.search();
        setResponse(availableUser,res);
    }
    catch(error){
        errorResponse(error,res);
    }
}

export const post = async (req,res) =>{
    try{
        // Store Body and pass to save method
        const user = req.body;
        // Save method has the logic to post the user to DB
        const savedUser = await tempService.save(user);
        setResponse(savedUser,res);
    }
    catch(error){
        errorResponse(error,res);
    }
    
}

// // Signup
// export const signup = async (req,res) =>{
//     try{
//         // Store Body and pass to save method
//         const {firstName, lastName,email,password} = req.body;
//         // Save method has the logic to post the user to DB
//         const savedUser = await User.signup(firstName, lastName,email,password)
//         const id = savedUser._id;
//         const firstNameSaved = savedUser.firstName;
//         const lastNameSaved = savedUser.lastName;
//         const balanceSaved = savedUser.balance;
//         // Create a token
//         const token = createToken(savedUser._id);
//         res.status(200).json({email,id,firstNameSaved,lastNameSaved,balanceSaved, token})
        
//         // setResponse(savedUser,res);
//     }
//     catch(error){
//         errorResponse(error,res);
//     }
    
// }

// // Login
// export const login = async (req,res) =>{
//     try{
//         // Store Body and pass to save method
//         const {email,password} = req.body;
//         // Save method has the logic to post the user to DB
//         const savedUser = await User.login(email,password)
//         const id = savedUser._id;
//         const firstNameSaved = savedUser.firstName;
//         const lastNameSaved = savedUser.lastName;
//         const balanceSaved = savedUser.balance;
//         // Create a token
//         const token = createToken(savedUser._id);
//         res.status(200).json({email,id,firstNameSaved,lastNameSaved,balanceSaved, token})
        
//         // setResponse(savedUser,res);
//     }
//     catch(error){
//         errorResponse(error,res);
//     }
    
// }


// export const update = async (req,res) =>{
//     try{
//         const todo = req.body;
//         const id = req.params.id;
//         // Update based on id and user body
//         const updateUser = await userService.update(todo,id);
//         setResponse(updateUser,res);
//     }
//     catch(error){
//         errorResponse(error,res);
//     }
// }

// export const remove = async (req,res) =>{
//     try{
//         const id = req.params.id;
//         // Delete a Todo
//         const deleteUser = await userService.remove(id);
//         setResponse(deleteUser,res);
//     }
//     catch(error){
//         errorResponse(error,res);
//     }
// }