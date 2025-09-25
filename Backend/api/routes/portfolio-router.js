import express from 'express';
import * as TradeController from './../controllers/trade-controller.js'

const router = express.Router();


// route to get all trades performed by a user.
router.route('/:id')
    .get(TradeController.getPortfolio);

export default router;