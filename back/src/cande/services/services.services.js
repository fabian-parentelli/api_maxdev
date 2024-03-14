import { serviceRepository } from '../repositories/index.repositories.js';
import { ServiceNotFound } from '../../utils/custom-exceptions.utils.js';
import { getPublicId, deleteImg } from '../../config/cloudinary.config.js';

const newService = async (service, imgUrl, imgName) => {
    if (!service.name && !service.description) throw new ServiceNotFound('Falta información');
    const areService = await serviceRepository.getByName(service.name);
    if (areService) {
        const publicId = getPublicId(imgUrl);
        await deleteImg(publicId);
        throw new ServiceNotFound('El producto ya existe');
    };
    service.imgUrl = imgUrl;
    service.imgName = imgName;
    const data = await serviceRepository.newService(service);
    return { status: 'success', data };
};

const getAllService = async () => {
    const result = await serviceRepository.getAllService();
    if (!result) throw new ServiceNotFound('No se encuentran los servicios');
    return { status: 'success', result };
};

const getServiceById = async (id) => {
    const result = await serviceRepository.getServiceById(id);
    if (!result) throw new ServiceNotFound('No se encuentra el servicio');
    return { status: 'success', result };
};

const changeActive = async (id) => {
    const service = await serviceRepository.getServiceById(id);
    if (!service) throw new ServiceNotFound('No se encuentra el servicio');
    service.active = !service.active;
    const result = await serviceRepository.updateService(service);
    return { status: 'success', result };
};

const updateService = async (service, imgUrl, imgName, id) => {
    const serviceBd = await serviceRepository.getServiceById(id);
    if (!serviceBd) throw new ServiceNotFound('Servicio no encontrado');
    const newService = { ...serviceBd, ...service };
    if (imgUrl) newService.imgUrl = imgUrl;
    if (imgName) newService.imgName = imgName;

    console.log(service);
    const result = await serviceRepository.updateService(newService);
    if (!result) throw new ServiceNotFound('El servicio no se pudo actualizar');
    return { status: 'success', result };
};

export { newService, getAllService, changeActive, getServiceById, updateService };