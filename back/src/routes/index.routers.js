// Shifts Cande.
import ServiceCaRouter from '../cande/router/services.routers.js';
import ShiftCaRouter from '../cande/router/shifts.routers.js';

export const candeService = new ServiceCaRouter().getRouter();
export const candeShift = new ShiftCaRouter().getRouter();