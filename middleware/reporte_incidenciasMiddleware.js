import 'reflect-metadata';
import { Router } from "express";
import { GetAllReportes } from "../dto/reporte_incidenciaDTO.js";
import { validationResult } from "express-validator";
import { parametro } from  '../dto/parametroDTO.js';

export const appMiddlewareDataReporte = Router();
export const appMiddlewareParamReporte = Router();

appMiddlewareDataReporte.use(GetAllReportes, async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json(errors);
    next();
});

appMiddlewareParamReporte.use(parametro, async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
    next();
});
