import dotEnv from 'dotenv';

dotEnv.config();

export default {
    port: process.env.PORT
};  