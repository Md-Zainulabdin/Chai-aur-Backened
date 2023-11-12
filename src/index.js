import dotenv from 'dotenv'
import connectDB from './db/index.js'
import { app } from './app.js';

// configure dotenv 
dotenv.config();

const PORT = 5000 || process.env.PORT;

connectDB()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is running on PORT: ${PORT}`);
        })
    }).catch((error) => {
        console.log("error", error);
    })