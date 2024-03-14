import dotEnv from 'dotenv';

dotEnv.config();

export default {
    port: process.env.PORT,
    mongoCande: process.env.MONGOCANDE,
    cloud_name: process.env.CLOUDNAME,
    api_key: process.env.APIKEY,
    api_secret: process.env.APISECRET
};