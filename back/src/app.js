import cors from 'cors';
import expres from "express";
import env from './config/dotEnv.config.js';

const app = expres();

app.use(cors());
app.use(expres.json());
app.use(expres.urlencoded({ extended: true }));

app.get('/saludo', (req, res) => {
    res.send('Probando si el servidor funciona');
});

app.listen(env.port, () => console.log('server runing'));