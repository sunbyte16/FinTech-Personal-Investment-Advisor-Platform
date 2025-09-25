import * as TradeService from './../services/trade-service.js';


// setSuccessResponse to be called when the promise returned by the service layer functions are successfull
const setSuccessResponse = (obj, response) => {
    response.status(200);
    response.json(obj);
}

// setErrorResponse to be called when the promise returned by the service layer functions are not successfull
const setErrorResponse = (error, response) => {
    response.status(500);
    response.json({Error:error.message});
}

// post function to place trade order.
export const placeOrder = async (request,response) => {
    try{
        const id = request.params.id;
        const payload = request.body;
        const trade = await TradeService.order(id,payload);
        setSuccessResponse(trade,response); // if above promise is successfull
    } catch(error){
        setErrorResponse(error,response); // if above promise is not successfull
    }
    
}

// get function to get all trades done by a user.
export const getAllTrades = async (request,response) => {
    try{
        const id = request.params.id
        const trades = await TradeService.getAllTrades(id);
        setSuccessResponse(trades,response); // if above promise is successfull
    } catch(error){
        setErrorResponse(error,response); // if above promise is not successfull
    }
    
}

export const getPortfolio = async (request,response) => {
    try{
        const id = request.params.id
        const trades = await TradeService.getPortfolio(id);
        setSuccessResponse(trades,response); // if above promise is successfull
    } catch(error){
        setErrorResponse(error,response); // if above promise is not successfull
    }
    
}

// // search function to call the search function in service layer, this function will fetch a task item by ID.
// export const search = async (request,response) => {
//     try{
//         const id = request.params.id;
//         const task = await TaskService.search(id);
//         setSuccessResponse(task,response); // if above promise is successfull
//     } catch(error){
//         setErrorResponse(error,response); // if above promise is not successfull
//     }
    
// }

// // remove function to call the remove function in service layer, this function will delete a task item by ID.
// export const remove = async (request,response) => {
//     try{
//         const id = request.params.id;
//         const tasks = await TaskService.remove(id);
//         setSuccessResponse(tasks,response); // if above promise is successfull
//     } catch(error){
//         setErrorResponse(error,response); // if above promise is not successfull
//     }
    
// }

// // update function to call the update function in service layer, this function will update a task item by ID.
// export const update = async (request,response) => {
//     try{
//         const id = request.params.id;
//         const payload = request.body;
//         const tasks = await TaskService.update(id,payload);
//         setSuccessResponse(tasks,response); // if above promise is successfull
//     } catch(error){
//         setErrorResponse(error,response); // if above promise is not successfull
//     }
// }