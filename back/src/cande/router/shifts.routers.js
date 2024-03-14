import Router from '../../routes/router.js';
import { passportEnum } from '../../config/enums.config.js';
import * as shiftsController from '../constrollers/shifts.controllers.js';

export default class ShiftCaRouter extends Router {
    init() {
        this.post('/config', ['PUBLIC'], passportEnum.NOTHING, shiftsController.configShifts);
        this.post('/', ['PUBLIC'], passportEnum.NOTHING, shiftsController.newShift);
        this.get('/', ['PUBLIC'], passportEnum.NOTHING, shiftsController.getConfigShifts);
        this.get('/cust', ['PUBLIC'], passportEnum.NOTHING, shiftsController.getShift);
        this.put('/:id', ['PUBLIC'], passportEnum.NOTHING, shiftsController.updateConfShifts);
    };
};