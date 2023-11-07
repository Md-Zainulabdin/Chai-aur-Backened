import express from "express"
import dotenv from 'dotenv'
import cors from "cors"

// configure dotenv 
dotenv.config({
    path: "./env"
})

const app = express();
const PORT = 5000 || process.env.PORT;

// adding middleware for handling upcoming data

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: false, limit: "16kb" }))

app.listen(PORT, () => console.log(`Server is listening on PORT: ${PORT}`))