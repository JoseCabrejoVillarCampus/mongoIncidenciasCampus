import 'reflect-metadata';
import { Router } from "express";
import { GetAllDiademas } from "../dto/diademaDTO.js";
import { validationResult } from "express-validator";
import { parametro } from  '../dto/parametroDTO.js';

export const appMiddlewareDataDiadema = Router();
export const appMiddlewareParamDiadema = Router();


appMiddlewareDataDiadema.use(GetAllDiademas, async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json(errors);
    let {id_diadema:codigoDiadema,marca_diadema:marca, color_diadema: color, estado:estado} = req.body;
    let json = {codigoDiadema, marca, color, estado};
    return res.status(200).json(json);
    next();
});


appMiddlewareParamDiadema.use(parametro, async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
    next();
});
