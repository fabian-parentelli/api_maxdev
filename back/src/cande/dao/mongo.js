import mongoose from "mongoose";
import env from '../../config/dotEnv.config.js';

export default function mongoDB() {
    try {
        mongoose.connect(env.mongoCande)
        console.log('Mongo Cande connected');
    } catch (error) {
        console.log(error);
    };
};