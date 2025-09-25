import app from './api/app.js';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// Initialise the port
const port = process.env.PORT || 8080;

// Listen to the port
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});