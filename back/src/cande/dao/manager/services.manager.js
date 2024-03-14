import { serviceModel } from '../models/services.model.js';

export default class Service {

    newService = async (service) => {
        return await serviceModel.create(service);
    };

    getByName = async (name) => {
        return await serviceModel.findOne({ name }).lean();
    };

    getAllService = async () => {
        return await serviceModel.find().lean();
    };

    getServiceById = async (id) => {
        return await serviceModel.findById(id).lean();
    };

    updateService = async (service) => {
        return await serviceModel.findByIdAndUpdate({ _id: service._id }, service, { new: true });
    };
};