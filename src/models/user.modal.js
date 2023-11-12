import mongoose, { Schema } from "mongoose";

export const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        unique: true
    }
})