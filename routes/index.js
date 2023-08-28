import { limitUsuario } from '../helpers/limit.js'
import passportHelper from '../helpers/passPortHelper.js'
import Routes from 'express';
import routesVersioning from 'express-routes-versioning';

//* Importacion de los Metodos para todas las Colecciones
import {
    getAreaById,
    getAreaAll,
    postArea,
    putArea,
    delArea
} from '../apis/Version1/areaApi.js';
import {
    getCategoriaAll,
    getCategoriaById,
    delCategoria,
    postCategoria,
    putCategoria
} from '../apis/Version1/categoriaApi.js';
import {
    getDiademaAll,
    getDiademaById,
    postDiadema,
    putDiadema,
    delDiadema
} from '../apis/Version1/diademaApi.js';
import {
    getEmailAll,
    getEmailById,
    postEmail,
    putEmail,
    delEmail
} from '../apis/Version1/emailApi.js';
import {
    getEquipoAll,
    getEquipoById,
    postEquipo,
    putEquipo,
    delEquipo
} from '../apis/Version1/equipoApi.js';
import {
    getEstadoAll,
    getEstadoById,
    postEstado,
    putEstado,
    delEstado
} from '../apis/Version1/estadoApi.js';
import {
    getIncidenciaAll,
    getIncidenciaById,
    postIncidencia,
    putIncidencia,
    delIncidencia
} from '../apis/Version1/incidenciaApi.js';
import {
    getMouseAll,
    getMouseById,
    postMouse,
    putMouse,
    delMouse
} from '../apis/Version1/mouseApi.js';
import {
    getPantallaAll,
    getPantallaById,
    postPantalla,
    putPantalla,
    delPantalla
} from '../apis/Version1/pantallaApi.js';
import {
    getReporteAll,
    getReporteById,
    postReporte,
    putReporte,
    delReporte
} from '../apis/Version1/reporte_incidenciaApi.js';
import {
    getSalonTrainnerAll,
    getSalonTrainnerById,
    postSalonTrainner,
    putSalonTrainner,
    delSalonTrainner
} from '../apis/Version1/salon_trainnerApi.js';
import {
    getSalonAll,
    getSalonById,
    postSalon,
    putSalon,
    delSalon
} from '../apis/Version1/salonApi.js';
import {
    getTecladoAll,
    getTecladoById,
    postTeclado,
    putTeclado,
    delTeclado
} from '../apis/Version1/tecladoApi.js';
import {
    getTelefonoAll,
    getTelefonoById,
    postTelefono,
    putTelefono,
    delTelefono
} from '../apis/Version1/telefonoApi.js';
import {
    getTipoAll,
    getTipoById,
    postTipo,
    putTipo,
    delTipo
} from '../apis/Version1/tipo_incidenciaApi.js';
import {
    getTorreAll,
    getTorreById,
    putTorre,
    postTorre,
    delTorre
} from '../apis/Version1/torreApi.js';
import {
    getTrainnerAll,
    getTrainnerById,
    postTrainner,
    putTrainner,
    delTrainner
} from '../apis/Version1/trainnersApi.js';

//* Importacion de los middleware de las Validaciones nativas de express
import { appMiddlewareDataArea , appMiddlewareParamArea } from '../middleware/areaMiddleware.js';
import { appMiddlewareDataCategoria, appMiddlewareParamCategoria } from '../middleware/categoriaMiddleware.js';
import { appMiddlewareDataDiadema, appMiddlewareParamDiadema } from '../middleware/diademaMiddleware.js';
import { appMiddlewareDataEmail, appMiddlewareParamEmail } from '../middleware/emailMiddleware.js';
import { appMiddlewareDataEquipo, appMiddlewareParamEquipo } from '../middleware/equipoMiddleware.js';
import { appMiddlewareDataEstado, appMiddlewareParamEstado } from '../middleware/estadoMiddleware.js';
import { appMiddlewareDataIncidencia, appMiddlewareParamIncidencia } from '../middleware/incidenciasMiddleware.js';
import { appMiddlewareDataMouse, appMiddlewareParamMouse } from '../middleware/mouseMiddleware.js';
import { appMiddlewareDataPantalla, appMiddlewareParamPantalla } from '../middleware/pantallaMiddleware.js';
import { appMiddlewareDataReporte, appMiddlewareParamReporte } from '../middleware/reporte_incidenciasMiddleware.js';
import { appMiddlewareDataSalonTrainner, appMiddlewareParamSalonTrainner } from '../middleware/salon_trainnerMiddleware.js';
import { appMiddlewareDataSalon, appMiddlewareParamSalon } from '../middleware/salonMiddleware.js';
import { appMiddlewareDataTeclado, appMiddlewareParamTeclado } from '../middleware/tecladoMiddleware.js';
import { appMiddlewareDataTelefono, appMiddlewareParamTelefono } from '../middleware/telefonoMiddleware.js';
import { appMiddlewareDataTipoIncidencia, appMiddlewareParamTipoIncidencia } from '../middleware/tipo_incidenciaMiddleware.js';
import { appMiddlewareDataTorre, appMiddlewareParamTorre } from '../middleware/torreMiddleware.js';
import { appMiddlewareDataTrainners, appMiddlewareParamTrainners } from '../middleware/trainnersMiddleware.js';


const appUser = Routes();
const appArea = Routes();
const appCategoria = Routes();
const appDiadema = Routes();
const appEmail = Routes();
const appEquipo = Routes();
const appEstado = Routes();
const appIncidencia = Routes();
const appMouse = Routes();
const appPantalla = Routes();
const appReporte = Routes();
const appSalonTrainner = Routes();
const appSalon = Routes();
const appTeclado = Routes();
const appTelefono = Routes();
const appTipo = Routes();
const appTorre = Routes();
const appTrainners = Routes();

const version = routesVersioning();

// ? Headers 'Authorization: Bearer ....'
appUser.use(limitUsuario(), passportHelper.authenticate('bearer', {
    session: false
}));

// * Headers 'Accept-Version: 1.0.0' 
// ? Area
appArea.get('/:id?' , appMiddlewareParamArea,version({
    "1.0.0": getAreaAll,
    "1.0.1": getAreaById 
}));
appArea.post('/', appMiddlewareDataArea, version({
    "1.0.0": postArea
}));
appArea.put('/:id?', appMiddlewareParamArea, appMiddlewareDataArea, version({
    "1.0.0": putArea
}));
appArea.delete('/:id?', appMiddlewareParamArea, version({
    "1.0.0": delArea
}));

// ? Categoria
appCategoria.get('/:id?', appMiddlewareParamCategoria , version({
    "1.0.0": getCategoriaAll,
    "1.0.1": getCategoriaById
}));
appCategoria.post('/', appMiddlewareDataCategoria , version({
    "1.0.0": postCategoria
}));
appCategoria.put('/:id?', appMiddlewareParamCategoria, appMiddlewareDataCategoria , version({
    "1.0.0": putCategoria
}));
appCategoria.delete('/:id?', appMiddlewareParamCategoria ,version({
    "1.0.0": delCategoria
}));

// ? Diadema
appDiadema.get('/:id?', appMiddlewareParamDiadema , version({
    "1.0.0": getDiademaAll,
    "1.0.1": getDiademaById
}));
appDiadema.post('/', appMiddlewareDataDiadema ,version({
    "1.0.0": postDiadema
}));
appDiadema.put('/:id?', appMiddlewareParamDiadema , appMiddlewareDataDiadema , version({
    "1.0.0": putDiadema
}));
appDiadema.delete('/:id?', appMiddlewareParamDiadema, version({
    "1.0.0": delDiadema
}));

// ? Email
appEmail.get('/:id?', appMiddlewareParamEmail , version({
    "1.0.0": getEmailAll,
    "1.0.1": getEmailById
}));
appEmail.post('/', appMiddlewareDataEmail , version({
    "1.0.0": postEmail
}));
appEmail.put('/:id?', appMiddlewareParamEmail , appMiddlewareDataEmail , version({
    "1.0.0": putEmail
}));
appEmail.delete('/:id?', appMiddlewareParamEmail , version({
    "1.0.0": delEmail
}));

// ? Equipo
appEquipo.get('/:id?', appMiddlewareParamEquipo , version({
    "1.0.0": getEquipoAll,
    "1.0.1": getEquipoById
}));
appEquipo.post('/', appMiddlewareDataEquipo , version({
    "1.0.0": postEquipo
}));
appEquipo.put('/:id?', appMiddlewareParamEquipo , appMiddlewareDataEquipo , version({
    "1.0.0": putEquipo
}));
appEquipo.delete('/:id?', appMiddlewareParamEquipo , version({
    "1.0.0": delEquipo
}));

// ? Estado
appEstado.get('/:id?', appMiddlewareParamEstado , version({
    "1.0.0": getEstadoAll,
    "1.0.1": getEstadoById
}));
appEstado.post('/', appMiddlewareDataEstado , version({
    "1.0.0": postEstado
}));
appEstado.put('/:id?', appMiddlewareParamEstado , appMiddlewareDataEstado , version({
    "1.0.0": putEstado
}));
appEstado.delete('/:id?', appMiddlewareParamEstado , version({
    "1.0.0": delEstado
}));

// ? Incidencia
appIncidencia.get('/:id?', appMiddlewareParamIncidencia , version({
    "1.0.0": getIncidenciaAll,
    "1.0.1": getIncidenciaById
}));
appIncidencia.post('/', appMiddlewareDataIncidencia , version({
    "1.0.0": postIncidencia
}));
appIncidencia.put('/:id?', appMiddlewareParamIncidencia , appMiddlewareDataIncidencia , version({
    "1.0.0": putIncidencia
}));
appIncidencia.delete('/:id?', appMiddlewareParamIncidencia , version({
    "1.0.0": delIncidencia
}));

// ? Mouse
appMouse.get('/:id?', appMiddlewareParamMouse , version({
    "1.0.0": getMouseAll,
    "1.0.1": getMouseById
}));
appMouse.post('/', appMiddlewareDataMouse , version({
    "1.0.0": postMouse
}));
appMouse.put('/:id?', appMiddlewareParamMouse , appMiddlewareDataMouse , version({
    "1.0.0": putMouse
}));
appMouse.delete('/:id?', appMiddlewareParamMouse , version({
    "1.0.0": delMouse
}));

// ? Pantalla
appPantalla.get('/:id?', appMiddlewareParamPantalla , version({
    "1.0.0": getPantallaAll,
    "1.0.1": getPantallaById
}));
appPantalla.post('/', appMiddlewareDataPantalla , version({
    "1.0.0": postPantalla
}));
appPantalla.put('/:id?',  appMiddlewareParamPantalla, appMiddlewareDataPantalla , version({
    "1.0.0": putPantalla
}));
appPantalla.delete('/:id?', appMiddlewareParamPantalla , version({
    "1.0.0": delPantalla
}));

// ? Reporte
appReporte.get('/:id?', appMiddlewareParamReporte , version({
    "1.0.0": getReporteAll,
    "1.0.1": getReporteById
}));
appReporte.post('/', appMiddlewareDataReporte , version({
    "1.0.0": postReporte
}));
appReporte.put('/:id?', appMiddlewareParamReporte , appMiddlewareDataReporte , version({
    "1.0.0": putReporte
}));
appReporte.delete('/:id?', appMiddlewareParamReporte ,version({
    "1.0.0": delReporte
}));

// ? Salon Trainner
appSalonTrainner.get('/:id?', appMiddlewareParamSalonTrainner , version({
    "1.0.0": getSalonTrainnerAll,
    "1.0.1": getSalonTrainnerById
}));
appSalonTrainner.post('/', appMiddlewareDataSalonTrainner , version({
    "1.0.0": postSalonTrainner
}));
appSalonTrainner.put('/:id?', appMiddlewareParamSalonTrainner , appMiddlewareDataSalonTrainner , version({
    "1.0.0": putSalonTrainner
}));
appSalonTrainner.delete('/:id?', appMiddlewareParamSalonTrainner , version({
    "1.0.0": delSalonTrainner
}));

// ? Salon
appSalon.get('/:id?', appMiddlewareParamSalon , version({
    "1.0.0": getSalonAll,
    "1.0.1": getSalonById
}));
appSalon.post('/', appMiddlewareDataSalon , version({
    "1.0.0": postSalon
}));
appSalon.put('/:id?', appMiddlewareParamSalon , appMiddlewareDataSalon , version({
    "1.0.0": putSalon
}));
appSalon.delete('/:id?', appMiddlewareParamSalon , version({
    "1.0.0": delSalon
}));


// ? Teclado 
appTeclado.get('/:id?', appMiddlewareParamTeclado , version({
    "1.0.0": getTecladoAll,
    "1.0.1": getTecladoById
}));
appTeclado.post('/', appMiddlewareDataTeclado , version({
    "1.0.0": postTeclado
}));
appTeclado.put('/:id?', appMiddlewareParamTeclado , appMiddlewareDataTeclado , version({
    "1.0.0": putTeclado
}));
appTeclado.delete('/:id?', appMiddlewareParamTeclado , version({
    "1.0.0": delTeclado
}));

// ? Telefono 
appTelefono.get('/:id?', appMiddlewareParamTelefono , version({
    "1.0.0": getTelefonoAll,
    "1.0.1": getTelefonoById
}));
appTelefono.post('/', appMiddlewareDataTelefono , version({
    "1.0.0": postTelefono
}));
appTelefono.put('/:id?', appMiddlewareParamTelefono , appMiddlewareDataTelefono , version({
    "1.0.0": putTelefono
}));
appTelefono.delete('/:id?', appMiddlewareParamTelefono , version({
    "1.0.0": delTelefono
}));

// ? Tipo
appTipo.get('/:id?', appMiddlewareParamTipoIncidencia , version({
    "1.0.0": getTipoAll,
    "1.0.1": getTipoById
}));
appTipo.post('/', appMiddlewareDataTipoIncidencia , version({
    "1.0.0": postTipo
}));
appTipo.put('/:id?', appMiddlewareParamTipoIncidencia , appMiddlewareDataTipoIncidencia , version({
    "1.0.0": putTipo
}));
appTipo.delete('/:id?', appMiddlewareParamTipoIncidencia , version({
    "1.0.0": delTipo
}));

// ? Torre 
appTorre.get('/:id?', appMiddlewareParamTorre , version({
    "1.0.0": getTorreAll,
    "1.0.1": getTorreById
}));
appTorre.post('/', appMiddlewareDataTorre , version({
    "1.0.0": postTorre
}));
appTorre.put('/:id?', appMiddlewareParamTorre , appMiddlewareDataTorre , version({
    "1.0.0": putTorre
}));
appTorre.delete('/:id?', appMiddlewareParamTorre , version({
    "1.0.0": delTorre
}));

// ? Trainner
appTrainners.get('/:id?', appMiddlewareParamTrainners , version({
    "1.0.0": getTrainnerAll,
    "1.0.1": getTorreById
}));
appTrainners.post('/', appMiddlewareDataTrainners , version({
    "1.0.0": postTrainner
}));
appTrainners.put('/:id?', appMiddlewareParamTrainners , appMiddlewareDataTrainners , version({
    "1.0.0": putTrainner
}));
appTrainners.delete('/:id?', appMiddlewareParamTrainners , version({
    "1.0.0": delTrainner
}));

//*Exportamos las apps hacia app.js en la parte principal del codigo
export {
    appUser,
    appArea,
    appCategoria,
    appDiadema,
    appEmail,
    appEquipo,
    appEstado,
    appIncidencia,
    appMouse,
    appPantalla,
    appReporte,
    appSalonTrainner,
    appSalon,
    appTeclado,
    appTelefono,
    appTipo,
    appTorre,
    appTrainners,
};