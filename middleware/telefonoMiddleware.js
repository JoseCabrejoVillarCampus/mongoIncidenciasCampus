import 'reflect-metadata';
import { Router } from "express";
import { GetAllTelefonos } from "../dto/telefonoDTO.js";
import { validationResult } from "express-validator";
import { parametro } from  '../dto/parametroDTO.js';

export const appMiddlewareDataTelefono = Router();
export const appMiddlewareParamTelefono = Router();

appMiddlewareDataTelefono.use(GetAllTelefonos, async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json(errors);
    let {id_telefono:codigoTelefono,numero_telefono:numeroTelefono, trainner:trainner} = req.body;
    let json = {codigoTelefono, numeroTelefono, trainner};
    return res.status(200).json(json);
    next();
});

appMiddlewareParamTelefono.use(parametro, async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
    next();
});
