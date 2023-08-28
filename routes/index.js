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
import { appMiddlewareDataArea, appMiddlewareParamArea } from '../middleware/areaMiddleware.js';


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
appArea.get('/', version({
    "1.0.0": getAreaAll
}));
appArea.get('/:id?', appMiddlewareParamArea, version({
    "1.0.1": getAreaById
}));
appArea.post('/', appMiddlewareDataArea, version({
    "1.0.0": postArea
}));
appArea.put('/:id', appMiddlewareDataArea, appMiddlewareParamArea , version({
    "1.0.0": putArea
}));
appArea.delete('/:id', appMiddlewareParamArea, version({
    "1.0.0": delArea
}));

// ? Categoria
appCategoria.get('/', version({
    "1.0.0": getCategoriaAll
}));
appCategoria.get('/:id?', version({
    "1.0.1": getCategoriaById
}));
appCategoria.post('/', version({
    "1.0.0": postCategoria
}));
appCategoria.put('/:id', version({
    "1.0.0": putCategoria
}));
appCategoria.delete('/:id', version({
    "1.0.0": delCategoria
}));

// ? Diadema
appDiadema.get('/', version({
    "1.0.0": getDiademaAll
}));
appDiadema.get('/:id?', version({
    "1.0.1": getDiademaById
}));
appDiadema.post('/', version({
    "1.0.0": postDiadema
}));
appDiadema.put('/:id', version({
    "1.0.0": putDiadema
}));
appDiadema.delete('/:id', version({
    "1.0.0": delDiadema
}));

// ? Email
appEmail.get('/', version({
    "1.0.0": getEmailAll
    }));
appEmail.get('/:id?', version({
    "1.0.1": getEmailById
}));
appEmail.post('/', version({
    "1.0.0": postEmail
}));
appEmail.put('/:id', version({
    "1.0.0": putEmail
}));
appEmail.delete('/:id', version({
    "1.0.0": delEmail
}));

// ? Equipo
appEquipo.get('/', version({
    "1.0.0": getEquipoAll
}));
appEquipo.get('/:id?', version({
    "1.0.1": getEquipoById
}));
appEquipo.post('/', version({
    "1.0.0": postEquipo
}));
appEquipo.put('/:id', version({
    "1.0.0": putEquipo
}));
appEquipo.delete('/:id', version({
    "1.0.0": delEquipo
}));

// ? Estado
appEstado.get('/', version({
    "1.0.0": getEstadoAll
}));
appEstado.get('/:id?', version({
    "1.0.1": getEstadoById
}));
appEstado.post('/', version({
    "1.0.0": postEstado
}));
appEstado.put('/:id', version({
    "1.0.0": putEstado
}));
appEstado.delete('/:id', version({
    "1.0.0": delEstado
}));

// ? Incidencia
appIncidencia.get('/', version({
    "1.0.0": getIncidenciaAll
}));
appIncidencia.get('/:id?', version({
    "1.0.1": getIncidenciaById
}));
appIncidencia.post('/', version({
    "1.0.0": postIncidencia
}));
appIncidencia.put('/:id', version({
    "1.0.0": putIncidencia
}));
appIncidencia.delete('/:id', version({
    "1.0.0": delIncidencia
}));

// ? Mouse
appMouse.get('/', version({
    "1.0.0": getMouseAll
}));
appMouse.get('/:id?', version({
    "1.0.1": getMouseById
}));
appMouse.post('/', version({
    "1.0.0": postMouse
}));
appMouse.put('/:id', version({
    "1.0.0": putMouse
}));
appMouse.delete('/:id', version({
    "1.0.0": delMouse
}));

// ? Pantalla
appPantalla.get('/', version({
    "1.0.0": getPantallaAll
}));
appPantalla.get('/:id?', version({
    "1.0.1": getPantallaById
}));
appPantalla.post('/', version({
    "1.0.0": postPantalla
}));
appPantalla.put('/:id', version({
    "1.0.0": putPantalla
}));
appPantalla.delete('/:id', version({
    "1.0.0": delPantalla
}));

// ? Reporte
appReporte.get('/', version({
    "1.0.0": getReporteAll
}));
appReporte.get('/:id?', version({
    "1.0.1": getReporteById
}));
appReporte.post('/', version({
    "1.0.0": postReporte
}));
appReporte.put('/:id', version({
    "1.0.0": putReporte
}));
appReporte.delete('/:id', version({
    "1.0.0": delReporte
}));

// ? Salon Trainner
appSalonTrainner.get('/', version({
    "1.0.0": getSalonTrainnerAll
}));
appSalonTrainner.get('/:id?', version({
    "1.0.1": getSalonTrainnerById
}));
appSalonTrainner.post('/', version({
    "1.0.0": postSalonTrainner
}));
appSalonTrainner.put('/:id', version({
    "1.0.0": putSalonTrainner
}));
appSalonTrainner.delete('/:id', version({
    "1.0.0": delSalonTrainner
}));

// ? Salon 
appSalon.get('/', version({
    "1.0.0": getSalonAll
}));
appSalon.get('/:id?', version({
    "1.0.1": getSalonById
}));
appSalon.post('/', version({
    "1.0.0": postSalon
}));
appSalon.put('/:id', version({
    "1.0.0": putSalon
}));
appSalon.delete('/:id', version({
    "1.0.0": delSalon
}));


// ? Teclado 
appTeclado.get('/', version({
    "1.0.0": getTecladoAll
}));
appTeclado.get('/:id?', version({
    "1.0.1": getTecladoById
}));
appTeclado.post('/', version({
    "1.0.0": postTeclado
}));
appTeclado.put('/:id', version({
    "1.0.0": putTeclado
}));
appTeclado.delete('/:id', version({
    "1.0.0": delTeclado
}));

// ? Telefono 
appTelefono.get('/', version({
    "1.0.0": getTelefonoAll
}));
appTelefono.get('/:id?', version({
    "1.0.1": getTelefonoById
}));
appTelefono.post('/', version({
    "1.0.0": postTelefono
}));
appTelefono.put('/:id', version({
    "1.0.0": putTelefono
}));
appTelefono.delete('/:id', version({
    "1.0.0": delTelefono
}));

// ? Tipo 
appTipo.get('/', version({
    "1.0.0": getTipoAll
}));
appTipo.get('/:id?', version({
    "1.0.1": getTipoById
}));
appTipo.post('/', version({
    "1.0.0": postTipo
}));
appTipo.put('/:id', version({
    "1.0.0": putTipo
}));
appTipo.delete('/:id', version({
    "1.0.0": delTipo
}));

// ? Torre 
appTorre.get('/', version({
    "1.0.0": getTorreAll
}));
appTorre.get('/:id?', version({
    "1.0.1": getTorreById
}));
appTorre.post('/', version({
    "1.0.0": postTorre
}));
appTorre.put('/:id', version({
    "1.0.0": putTorre
}));
appTorre.delete('/:id', version({
    "1.0.0": delTorre
}));

// ? Trainner
appTrainners.get('/', version({
    "1.0.0": getTrainnerAll
}));
appTrainners.get('/:id?', version({
    "1.0.0": getTrainnerAll
}));
appTrainners.post('/', version({
    "1.0.0": postTrainner
}));
appTrainners.put('/:id', version({
    "1.0.0": putTrainner
}));
appTrainners.delete('/:id', version({
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