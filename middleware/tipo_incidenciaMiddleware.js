import 'reflect-metadata';
import { Router } from "express";
import { GetAllTipoIncidencia } from "../dto/tipo_incidenciaDTO.js";
import { validationResult } from "express-validator";
import { Params } from '../dto/parametroDTO.js';

export const appMiddlewareDataTipoIncidencia = Router();
export const appMiddlewareParamTipoIncidencia = Router();

appMiddlewareDataTipoIncidencia.use(GetAllTipoIncidencia, async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json(errors);
    next();
});

appMiddlewareParamTipoIncidencia.use(Params, async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
    next();
});
