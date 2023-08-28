import 'reflect-metadata';
import { Router } from "express";
import { GetAllIncidencias } from "../dto/incidenciaDTO.js";
import { validationResult } from "express-validator";
import { parametro } from  '../dto/parametroDTO.js';

export const appMiddlewareDataIncidencia = Router();
export const appMiddlewareParamIncidencia = Router();


appMiddlewareDataIncidencia.use(GetAllIncidencias, async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json(errors);
    let {id_incidencia:codigoIncidencia,categoria:categoria, fecha: fecha, equipo:equipo,lugar:lugar, trainner: trainner} = req.body;
    let json = {codigoIncidencia, categoria, fecha, equipo, lugar, trainner};
    return res.status(200).json(json);
    next();
});


appMiddlewareParamIncidencia.use(parametro, async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
    next();
});
