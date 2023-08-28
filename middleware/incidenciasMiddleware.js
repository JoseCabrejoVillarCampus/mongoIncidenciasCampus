import 'reflect-metadata';
import { Router } from "express";
import { GetAllIncidencias } from "../dto/incidenciaDTO.js";
import { validationResult } from "express-validator";
import { Params } from '../dto/parametroDTO.js';

export const appMiddlewareDataIncidencia = Router();
export const appMiddlewareParamIncidencia = Router();


appMiddlewareDataIncidencia.use(GetAllIncidencias, async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json(errors);
    next();
});


appMiddlewareParamIncidencia.use(Params, async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
    next();
});
