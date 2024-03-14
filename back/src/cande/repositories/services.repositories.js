import { serviceManager } from '../dao/manager/index.manager.js';
import mongoDB from "../dao/mongo.js";

export default class ServiceRepository {
    
    constructor() { mongoDB() };

    newService = async (servcie) => {
        const result = await serviceManager.newService(servcie);
        return result;
    };

    getByName = async (name) => {
        const result = await serviceManager.getByName(name);
        return result;
    };

    getAllService = async () => {
        const result = await serviceManager.getAllService();
        return result;
    };

    getServiceById = async (id) => {
        const result = await serviceManager.getServiceById(id);
        return result;
    };

    updateService = async (service) => {
        const result = await serviceManager.updateService(service);
        return result;
    };
};