import { shiftModel } from '../models/shifts.model.js';
import { shiftCustomerModel } from '../models/shiftCustomers.model.js';

export default class Shift {

    configShifts = async (shift) => {
        return await shiftModel.create(shift);
    };

    getConfigShifts = async () => {
        return await shiftModel.find().lean();
    };

    getShiftConfById = async (id) => {
        return await shiftModel.findById(id).lean();
    };

    updateConfShifts = async (shift) => {
        return await shiftModel.findByIdAndUpdate({ _id: shift._id }, shift);
    };

    newShift = async (shift) => {
        return await shiftCustomerModel.create(shift);
    };

    getShift = async () => {
        return await shiftCustomerModel.find().lean();
    };
};