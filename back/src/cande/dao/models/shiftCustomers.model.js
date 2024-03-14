import mongoose from "mongoose";

const shiftCustomerCollection = 'shiftCustomer';

const shiftCustomerSchema = new mongoose.Schema({
    day: { type: String },
    hour: { type: String },
    customer: {
        name: { type: String },
        address: { type: String },
        email: { type: String },
        phone: { type: String }
    },
    active: { type: Boolean, default: true },
    service: { type: mongoose.Schema.Types.ObjectId, ref: 'services' }
});

shiftCustomerSchema.pre('find', function() {
    this.populate('service');
});

export const shiftCustomerModel = mongoose.model(shiftCustomerCollection, shiftCustomerSchema);