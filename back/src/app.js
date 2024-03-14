import cors from 'cors';
import expres from "express";
import env from './config/dotEnv.config.js';

import { 
    // Shifts Cande.
    candeService, candeShift 
} from './routes/index.routers.js';

const app = expres();

app.use(cors());
app.use(expres.json());
app.use(expres.urlencoded({ extended: true }));

// Shifts Cande.
app.use('/cande_api/service', candeService);
app.use('/cande_api/shift', candeShift);

app.listen(env.port, () => console.log('server runing'));