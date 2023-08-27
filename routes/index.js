import {
    limitUsuario
} from '../helpers/limit.js'
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
import {
    GetAllAreas
} from '../dto/areaDTO.js';
import {
    GetAllCategorias
} from '../dto/categoriaDTO.js';
import {
    GetAllDiademas
} from '../dto/diademaDTO.js';
import {
    GetAllEmails
} from '../dto/emailDTO.js';
import {
    GetAllEquipos
} from '../dto/equipoDTO.js';
import {
    GetAllEstados
} from '../dto/estadoDTO.js';
import {
    GetAllIncidencias
} from '../dto/incidenciaDTO.js';
import {
    GetAllMouses
} from '../dto/mouseDTO.js';
import {
    GetAllPantallas
} from '../dto/pantallaDTO.js';
import {
    GetAllReportes
} from '../dto/reporte_incidenciaDTO.js';
import {
    GetAllSalonesTrainners
} from '../dto/salon_trainnerDTO.js';
import {
    GetAllSalones
} from '../dto/salonDTO.js';
import {
    GetAllTeclados
} from '../dto/tecladoDTO.js';
import {
    GetAllTelefonos
} from '../dto/telefonoDTO.js';
import {
    GetAllTipoIncidencia
} from '../dto/tipo_incidenciaDTO.js';
import {
    GetAllTorres
} from '../dto/torreDTO.js';
import {
    GetAllTrainners
} from '../dto/trainnersDTO.js';
import { validationResult } from 'express-validator';

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
appArea.get('/:id?', GetAllAreas, version({
    "1.0.0": getAreaAll,
    "1.0.1": getAreaById
}));
appArea.post('/', GetAllAreas, version({
    "1.0.0": postArea
}));
appArea.put('/:id', GetAllAreas, version({
    "1.0.0": putArea
}));
appArea.delete('/:id', GetAllAreas, version({
    "1.0.0": delArea
}));

// ? Categoria
appCategoria.get('/:id?', GetAllCategorias, version({
    "1.0.0": getCategoriaAll,
    "1.0.1": getCategoriaById
}));
appCategoria.post('/', GetAllCategorias, version({
    "1.0.0": postCategoria
}));
appCategoria.put('/:id', GetAllCategorias, version({
    "1.0.0": putCategoria
}));
appCategoria.delete('/:id', GetAllCategorias, version({
    "1.0.0": delCategoria
}));

// ? Diadema
appDiadema.get('/:id?', GetAllDiademas, version({
    "1.0.0": getDiademaAll,
    "1.0.1": getDiademaById
}));
appDiadema.post('/', GetAllDiademas, version({
    "1.0.0": postDiadema
}));
appDiadema.put('/:id', GetAllDiademas, version({
    "1.0.0": putDiadema
}));
appDiadema.delete('/:id', GetAllDiademas, version({
    "1.0.0": delDiadema
}));

// ? Email
appEmail.get('/:id?', GetAllEmails, version({
    "1.0.0": getEmailAll,
    "1.0.1": getEmailById
}));
appEmail.post('/', GetAllEmails, version({
    "1.0.0": postEmail
}));
appEmail.put('/:id', GetAllEmails, version({
    "1.0.0": putEmail
}));
appEmail.delete('/:id', GetAllEmails, version({
    "1.0.0": delEmail
}));

// ? Equipo
appEquipo.get('/:id?', GetAllEquipos, version({
    "1.0.0": getEquipoAll,
    "1.0.1": getEquipoById
}));
appEquipo.post('/', GetAllEquipos, version({
    "1.0.0": postEquipo
}));
appEquipo.put('/:id', GetAllEquipos, version({
    "1.0.0": putEquipo
}));
appEquipo.delete('/:id', GetAllEquipos, version({
    "1.0.0": delEquipo
}));

// ? Estado
appEstado.get('/:id?', GetAllEstados, version({
    "1.0.0": getEstadoAll,
    "1.0.1": getEstadoById
}));
appEstado.post('/', GetAllEstados, version({
    "1.0.0": postEstado
}));
appEstado.put('/:id', GetAllEstados, version({
    "1.0.0": putEstado
}));
appEstado.delete('/:id', GetAllEstados, version({
    "1.0.0": delEstado
}));

// ? Incidencia
appIncidencia.get('/:id?', GetAllIncidencias, version({
    "1.0.0": getIncidenciaAll,
    "1.0.1": getIncidenciaById
}));
appIncidencia.post('/', GetAllIncidencias, version({
    "1.0.0": postIncidencia
}));
appIncidencia.put('/:id', GetAllIncidencias, version({
    "1.0.0": putIncidencia
}));
appIncidencia.delete('/:id', GetAllIncidencias, version({
    "1.0.0": delIncidencia
}));

// ? Mouse
appMouse.get('/:id?', GetAllMouses, version({
    "1.0.0": getMouseAll,
    "1.0.1": getMouseById
}));
appMouse.post('/', GetAllMouses, version({
    "1.0.0": postMouse
}));
appMouse.put('/:id', GetAllMouses, version({
    "1.0.0": putMouse
}));
appMouse.delete('/:id', GetAllMouses, version({
    "1.0.0": delMouse
}));

// ? Pantalla
appPantalla.get('/:id?', GetAllPantallas, version({
    "1.0.0": getPantallaAll,
    "1.0.1": getPantallaById
}));
appPantalla.post('/', GetAllPantallas, version({
    "1.0.0": postPantalla
}));
appPantalla.put('/:id', GetAllPantallas, version({
    "1.0.0": putPantalla
}));
appPantalla.delete('/:id', GetAllPantallas, version({
    "1.0.0": delPantalla
}));

// ? Reporte
appReporte.get('/:id?', GetAllReportes, version({
    "1.0.0": getReporteAll,
    "1.0.1": getReporteById
}));
appReporte.post('/', GetAllReportes, version({
    "1.0.0": postReporte
}));
appReporte.put('/:id', GetAllReportes, version({
    "1.0.0": putReporte
}));
appReporte.delete('/:id', GetAllReportes, version({
    "1.0.0": delReporte
}));

// ? Salon Trainner
appSalonTrainner.get('/:id?', GetAllSalonesTrainners, version({
    "1.0.0": getSalonTrainnerAll,
    "1.0.1": getSalonTrainnerById
}));
appSalonTrainner.post('/', GetAllSalonesTrainners, version({
    "1.0.0": postSalonTrainner
}));
appSalonTrainner.put('/:id', GetAllSalonesTrainners, version({
    "1.0.0": putSalonTrainner
}));
appSalonTrainner.delete('/:id', GetAllSalonesTrainners, version({
    "1.0.0": delSalonTrainner
}));

// ? Salon 
appSalon.get('/:id?', GetAllSalones, version({
    "1.0.0": getSalonAll,
    "1.0.1": getSalonById
}));
appSalon.post('/', GetAllSalones, version({
    "1.0.0": postSalon
}));
appSalon.put('/:id', GetAllSalones, version({
    "1.0.0": putSalon
}));
appSalon.delete('/:id', GetAllSalones, version({
    "1.0.0": delSalon
}));


// ? Teclado 
appTeclado.get('/:id?', GetAllTeclados, version({
    "1.0.0": getTecladoAll,
    "1.0.1": getTecladoById
}));
appTeclado.post('/', GetAllTeclados, version({
    "1.0.0": postTeclado
}));
appTeclado.put('/:id', GetAllTeclados, version({
    "1.0.0": putTeclado
}));
appTeclado.delete('/:id', GetAllTeclados, version({
    "1.0.0": delTeclado
}));

// ? Telefono 
appTelefono.get('/:id?', GetAllTelefonos, version({
    "1.0.0": getTelefonoAll,
    "1.0.1": getTelefonoById
}));
appTelefono.post('/', GetAllTelefonos, version({
    "1.0.0": postTelefono
}));
appTelefono.put('/:id', GetAllTelefonos, version({
    "1.0.0": putTelefono
}));
appTelefono.delete('/:id', GetAllTelefonos, version({
    "1.0.0": delTelefono
}));

// ? Tipo 
appTipo.get('/:id?', GetAllTipoIncidencia, version({
    "1.0.0": getTipoAll,
    "1.0.1": getTipoById
}));
appTipo.post('/', GetAllTipoIncidencia, version({
    "1.0.0": postTipo
}));
appTipo.put('/:id', GetAllTipoIncidencia, version({
    "1.0.0": putTipo
}));
appTipo.delete('/:id', GetAllTipoIncidencia, version({
    "1.0.0": delTipo
}));

// ? Torre 
appTorre.get('/:id?', GetAllTorres, version({
    "1.0.0": getTorreAll,
    "1.0.1": getTorreById
}));
appTorre.post('/', GetAllTorres, version({
    "1.0.0": postTorre
}));
appTorre.put('/:id', GetAllTorres, version({
    "1.0.0": putTorre
}));
appTorre.delete('/:id', GetAllTorres, version({
    "1.0.0": delTorre
}));

// ? Trainner
appTrainners.get('/:id?', GetAllTrainners, version({
    "1.0.0": getTorreAll,
    "1.0.1": getTorreById
}));
appTrainners.post('/', GetAllTrainners, version({
    "1.0.0": postTorre
}));
appTrainners.put('/:id', GetAllTrainners, version({
    "1.0.0": putTorre
}));
appTrainners.delete('/:id', GetAllTrainners, version({
    "1.0.0": delTorre
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