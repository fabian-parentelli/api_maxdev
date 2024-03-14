import * as shiftService from '../services/shifts.services.js';
import { ShiftNotFound } from '../../utils/custom-exceptions.utils.js';

const configShifts = async (req, res) => {
    try {
        const result = await shiftService.configShifts({ ...req.body });
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof ShiftNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const getConfigShifts = async (req, res) => {
    try {
        const result = await shiftService.getConfigShifts({ ...req.body });
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof ShiftNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const updateConfShifts = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await shiftService.updateConfShifts(id, { ...req.body });
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof ShiftNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const newShift = async (req, res) => {
    try {
        const result = await shiftService.newShift({ ...req.body });
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof ShiftNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const getShift = async (req, res) => {
    try {
        const result = await shiftService.getShift();
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof ShiftNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

export { configShifts, getConfigShifts, updateConfShifts, newShift, getShift };