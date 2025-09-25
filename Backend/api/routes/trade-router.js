import express from 'express';
import * as TradeController from './../controllers/trade-controller.js'

const router = express.Router();

// post route method to place trades for a user.
router.route('/:id')
    .post(TradeController.placeOrder);

// route to get all trades performed by a user.
router.route('/:id')
    .get(TradeController.getAllTrades);

// // route to get method which will fetch item by ID.
// router.route('/:id')
//     .get(TaskController.search);

// // route to delete method which will delete item by ID.
// router.route('/:id')
//     .delete(TaskController.remove);

// // route to put method which will update item by ID.
// router.route('/:id')
//     .put(TaskController.update);

export default router;