import 'reflect-metadata';
import { Router } from "express";
import { GetAllTorres } from "../dto/torreDTO.js";
import { validationResult } from "express-validator";
import { parametro } from  '../dto/parametroDTO.js';

export const appMiddlewareDataTorre = Router();
export const appMiddlewareParamTorre = Router();

appMiddlewareDataTorre.use(GetAllTorres, async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json(errors);
    let {id_torre:codigoTorre,marca_torre:marca, color_torre: color, estado:estado} = req.body;
    let json = {codigoTorre, marca, color, estado};
    return res.status(200).json(json);
    next();
});

appMiddlewareParamTorre.use(parametro, async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
    next();
});
