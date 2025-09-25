import mongoose from 'mongoose';
import cors from 'cors';
import models from './models/index.js';
import routes from './routes/index.js'
import express from 'express';
import * as dotenv from 'dotenv' 
dotenv.config()

// Set mongoose strictQuery to false to suppress deprecation warning
mongoose.set('strictQuery', false);

//Initialise our app by creating express object
const app = express();
// To parse JSON we use express.json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Initialise the routes
routes(app);
// Establish the connection with DB
function database() {
    const connectionParams = {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
    
    // MongoDB Atlas Cloud Connection
    const mongoURI = 'mongodb+srv://SunilSharma:e6CHJbQePrnZmq57@cluster0.wd3y4zg.mongodb.net/stocks-portfolio?retryWrites=true&w=majority&appName=Cluster0';
    
    // Alternative options (commented out):
    // Option 1: Local MongoDB
    // const mongoURI = 'mongodb://localhost:27017/stocks-portfolio';
    
    // Option 2: Use environment variable (recommended for production)
    // const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/stocks-portfolio';
    
    try {
        mongoose.connect(mongoURI, connectionParams);
        console.log('Database connected successfully to:', mongoURI);
    } catch(error) {
        console.log('Database connection error:', error);
        console.log("Database connection failed");
    }
}

database();
export default app;