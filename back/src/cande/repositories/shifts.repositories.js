import { shiftManager } from '../dao/manager/index.manager.js';

export default class ShiftRepository {

    configShifts = async (shift) => {
        const englishDays = shift.days.map(day => spanishToEnglish[day]);
        const newShift = { ...shift, days: englishDays };
        const result = await shiftManager.configShifts(newShift);
        return result;
    };

    getConfigShifts = async () => {
        const result = await shiftManager.getConfigShifts();
        return result;
    };

    getShiftConfById = async (id) => {
        const result = await shiftManager.getShiftConfById(id);
        return result;
    };

    updateConfShifts = async (shift) => {
        const spanishDays = Object.keys(spanishToEnglish);
        const isSpanish = shift.days.some(day => spanishDays.includes(day));
        let englishDays = [...shift.days];
        if (isSpanish) englishDays = shift.days.map(day => spanishToEnglish[day]);
        englishDays = englishDays.filter(day => typeof day === 'string');
        const newShift = { ...shift, days: englishDays };
        const result = await shiftManager.updateConfShifts(newShift);
        return result;
    };
    

    newShift = async (shift) => {
        const result = await shiftManager.newShift(shift);
        return result;
    };

    getShift = async () => {
        const result = await shiftManager.getShift();
        return result;
    };
};

const spanishToEnglish = {
    Lunes: 'Monday',
    Martes: 'Tuesday',
    Miércoles: 'Wednesday',
    Jueves: 'Thursday',
    Viernes: 'Friday',
    Sábado: 'Saturday',
    Domingo: 'Sunday'
};