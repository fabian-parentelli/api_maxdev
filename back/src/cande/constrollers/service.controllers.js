import * as serviceService from '../services/services.services.js';
import { ServiceNotFound } from '../../utils/custom-exceptions.utils.js';

const newService = async (req, res) => {
    const imgName = req.file.originalname;
    const imgUrl = req.cloudinaryUrl;
    try {
        const result = await serviceService.newService({ ...req.body }, imgUrl, imgName);
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof ServiceNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const getAllService = async (req, res) => {
    try {
        const result = await serviceService.getAllService();
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof ServiceNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const getServiceById = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await serviceService.getServiceById(id);
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof ServiceNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const changeActive = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await serviceService.changeActive(id);
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof ServiceNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const updateService = async (req, res) => {
    let imgName = null;
    let imgUrl;
    if (req.file) {
        imgName = req.file.originalname;
        imgUrl = req.cloudinaryUrl;
    };
    const { id } = req.params;
    try {
        const result = await serviceService.updateService({ ...req.body }, imgUrl, imgName, id);
        if (result) return res.sendSuccess(result);
    } catch (error) {

        console.log(error); // Borrar <<<<<< Borrar <<<<< Borrar <<<<<< Borrar <<<<<<<

        if (error instanceof ServiceNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

export { newService, getAllService, changeActive, getServiceById, updateService };