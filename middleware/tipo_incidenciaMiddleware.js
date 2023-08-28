import 'reflect-metadata';
import { Router } from "express";
import { GetAllTipoIncidencia } from "../dto/tipo_incidenciaDTO.js";
import { validationResult } from "express-validator";
import { parametro } from  '../dto/parametroDTO.js';

export const appMiddlewareDataTipoIncidencia = Router();
export const appMiddlewareParamTipoIncidencia = Router();

appMiddlewareDataTipoIncidencia.use(GetAllTipoIncidencia, async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json(errors);
    let {id_tipo_incidencia:tipo,tipo_incidencia:tipoIncidente} = req.body;
    let json = {tipo, tipoIncidente};
    return res.status(200).json(json);
    next();
});

appMiddlewareParamTipoIncidencia.use(parametro, async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
    next();
});
