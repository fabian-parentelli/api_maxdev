import mongoose from "mongoose";

const shiftCollection = 'shift';

const shiftSchema = new mongoose.Schema({
    days: { type: Array },
    hours: {
        time: {
            open: { type: Number },
            closed: { type: Number }
        },
        fragment: { type: Number }
    }
});

export const shiftModel = mongoose.model(shiftCollection, shiftSchema);