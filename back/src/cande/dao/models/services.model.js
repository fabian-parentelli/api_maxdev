import mongoose from "mongoose";

const serviceCollection = 'services';

const serviceSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    imgUrl: { type: String, required: true },
    imgName: { type: String },
    active: { type: Boolean, default: true }
});

export const serviceModel = mongoose.model(serviceCollection, serviceSchema);