import { v2 as cloudinary } from 'cloudinary';
import dot from './dotEnv.config.js'

cloudinary.config({
    cloud_name: dot.cloud_name,
    api_key: dot.api_key,
    api_secret: dot.api_secret
});

const cloudinaryBD = 'cande' // Esto tengo que convertirlo en forma dinámica ..........

const uploadToCloudinary = (req, res, next) => {
    if (!req.file) {
        req.cloudinaryUrl = null;
        return next();
    }

    cloudinary.uploader.upload_stream({ folder: cloudinaryBD }, (error, result) => {
        if (error) {
            console.error('Error al cargar la imagen a Cloudinary:', error);
            return next(error);
        }

        req.cloudinaryUrl = result.secure_url;
        next();
    }).end(req.file.buffer);
};

const deleteImg = async (publicId) => {
    const result = await cloudinary.uploader.destroy(publicId);
    return result;
};

const getPublicId = (url) => {
    const regex = /\/v\d+\/(.+)\.\w+/;
    const match = url.match(regex);
    if (match && match.length > 1) {
        return match[1]; 
    } else {
        throw new Error('URL de Cloudinary no válida');
    };
};

export { uploadToCloudinary, deleteImg, getPublicId };