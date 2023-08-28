import 'reflect-metadata';
import { Router } from "express";
import { GetAllEstados } from "../dto/estadoDTO.js";
import { validationResult } from "express-validator";
import { parametro } from  '../dto/parametroDTO.js';

export const appMiddlewareDataEstado = Router();
export const appMiddlewareParamEstado = Router();


appMiddlewareDataEstado.use(GetAllEstados, async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json(errors);
    let {id_estado:codigoEstado,nombre_estado:estado} = req.body;
    let json = {codigoEstado, estado};
    return res.status(200).json(json);
    next();
});


appMiddlewareParamEstado.use(parametro, async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
    next();
});
