import dotenv from 'dotenv';
import express from 'express';
import * as Routes from './routes/index.js';
import {appLogin} from './routes/login.js';

dotenv.config();
let app = express();
app.use(express.json());

//? Rutas Optencion Del Token
app.use('/login', appLogin);
app.use("/user", Routes.appUser);

//? Rutas Para Los Cruds De Todas Las Colecciones
app.use("/area", Routes.appArea);
app.use("/categoria", Routes.appCategoria);
app.use("/diadema", Routes.appDiadema);
app.use("/email", Routes.appEmail);
app.use("/equipo", Routes.appEquipo);
app.use("/estado", Routes.appEstado);
app.use("/incidencia", Routes.appIncidencia);
app.use("/mouse", Routes.appMouse);
app.use("/pantalla", Routes.appPantalla);
app.use("/reporte", Routes.appReporte);
app.use("/salonTrainner", Routes.appSalonTrainner);
app.use("/salon", Routes.appSalon);
app.use("/teclado", Routes.appTeclado);
app.use("/telefono", Routes.appTelefono);
app.use("/tipoIncidencia", Routes.appTipo);
app.use("/torre", Routes.appTorre);
app.use("/trainner", Routes.appTrainners);


let config = JSON.parse(process.env.MY_SERVER);
console.log(config);
app.listen(config, ()=>{
    console.log(`http://${config.hostname}:${config.port}`);
});