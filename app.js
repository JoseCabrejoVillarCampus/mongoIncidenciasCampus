import dotenv from 'dotenv';
import express from 'express';
import * as Routes from './routes/index.js';
import {appLogin} from './routes/login.js';

dotenv.config();
let app = express();
app.use(express.json());

let config = JSON.parse(process.env.MY_SERVER);
console.log(config);
app.listen(config, ()=>{
    console.log(`http://${config.hostname}:${config.port}`);
});