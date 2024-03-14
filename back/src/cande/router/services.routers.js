import Router from '../../routes/router.js';
import * as serviceController from '../constrollers/service.controllers.js';
import { passportEnum } from '../../config/enums.config.js';
import { uploader } from '../../config/multer.config.js';
import { uploadToCloudinary } from '../../config/cloudinary.config.js';

export default class ServiceCaRouter extends Router {
    init() {
        this.post('/', ['PUBLIC'], passportEnum.NOTHING, uploader.single('file'), uploadToCloudinary, serviceController.newService);
        this.get('/', ['PUBLIC'], passportEnum.NOTHING, serviceController.getAllService);
        this.get('/:id', ['PUBLIC'], passportEnum.NOTHING, serviceController.getServiceById);
        this.put('/:id', ['PUBLIC'], passportEnum.NOTHING, serviceController.changeActive);
        this.put('/update/:id', ['PUBLIC'], passportEnum.NOTHING, uploader.single('file'), uploadToCloudinary, serviceController.updateService);
    };
};