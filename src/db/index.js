import { connect } from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
        const connectionInstance = await connect(`${process.env.DATABASE_URI}/${DB_NAME}`)
        console.log(`Connect to MongoDB`);
    } catch (error) {
        console.log(`MONGODB CONNECTION ERROR`, error);
        // process.exit(1)
    }
}

export default connectDB;