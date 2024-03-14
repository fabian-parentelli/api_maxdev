import { shiftRepository } from '../repositories/index.repositories.js';
import { ShiftNotFound } from '../../utils/custom-exceptions.utils.js';

const configShifts = async (shift) => {
    if (shift.days.length == 0) throw new ShiftNotFound('No hay días seleccionados');
    if (!shift.hours.time.open, !shift.hours.time.closed, !shift.hours.fragment) {
        throw new ShiftNotFound('No hay horas seleccionadas');
    };
    const result = await shiftRepository.configShifts(shift);
    if (!result) throw new ShiftNotFound('No se puede guardar la configutación');
    return { status: 'success', shift };
};

const getConfigShifts = async () => {
    const result = await shiftRepository.getConfigShifts();
    if (!result) throw new ShiftNotFound('Turnos no disponibles');
    return { status: 'success', result };
};

const updateConfShifts = async (id, shift) => {
    const shiftDB = await shiftRepository.getShiftConfById(id);
    if(!shiftDB) throw new ShiftNotFound('No es posible encontrar la configuración');
    const newConfig = { ...shiftDB, ...shift };
    const result = await shiftRepository.updateConfShifts(newConfig);
    if(!result) throw new ShiftNotFound('No se puede actualizar en este momento');
    return { status: 'success', result };
};

const newShift = async (shift) => {
    // Buscar si es que existe este turno <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
    const result = await shiftRepository.newShift(shift);
    if (!result) throw new ShiftNotFound('No se puede agendar el turno');
    return { status: 'success', result };
};

const getShift = async () => {
    const result = await shiftRepository.getShift();
    if(!result) throw new ShiftNotFound('No existen reservas');
    return { status: 'success', result };
};

export { configShifts, getConfigShifts, newShift, getShift, updateConfShifts };