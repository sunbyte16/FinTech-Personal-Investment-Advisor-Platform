import mongoose from 'mongoose';

// creating a new mongoose schema for task item
const Schema = new mongoose.Schema({
    userId: {
        type: String,
        required: 'userId is required.'
    },
    symbol: {
        type: String,
        required: 'symbol is required.'
    },
    name: {
        type: String,
        required: 'name is required.'
    },
    price: {
        type: Number,
        required: 'price is required.'
    },
    shares:{
        type: Number,
        required: 'Number of shares is required.'
    },
    tradeType:{
        type: String,
        required: 'tradeType is required.'
    },
    date:{
        type: Date,
        default: Date.now
    }
},{ versionKey: false})

const model = mongoose.model('tradeTransaction',Schema);

export default model;
