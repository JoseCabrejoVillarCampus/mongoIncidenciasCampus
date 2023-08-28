import 'reflect-metadata';
import { Router } from "express";
import { GetAllAreas } from "../dto/areaDTO.js";
import { validationResult } from "express-validator";
import { parametro } from '../dto/parametroDTO.js';


export const appMiddlewareDataArea = Router();
export const appMiddlewareParamArea = Router();



appMiddlewareDataArea.use(GetAllAreas, async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json(errors);
    let {id_area:codigoArea,nombre_area:nombre} = req.body;
    let json = {codigoArea, nombre};
    return res.status(200).json(json);
    next();
});

console.log(parametro);
appMiddlewareParamArea.use(parametro, (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
    next();
});

