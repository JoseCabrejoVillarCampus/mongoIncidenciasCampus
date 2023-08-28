import 'reflect-metadata';
import { Router } from "express";
import { GetAllTrainners } from "../dto/trainnersDTO.js";
import { validationResult } from "express-validator";
import { parametro } from  '../dto/parametroDTO.js';

export const appMiddlewareDataTrainners = Router();
export const appMiddlewareParamTrainners = Router();

appMiddlewareDataTrainners.use(GetAllTrainners, async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json(errors);
    let {id_trainner:codigoTrainner,nombre_trainner:nombre,jornada_trainner : jornada} = req.body;
    let json = {codigoTrainner, nombre, jornada};
    return res.status(200).json(json);
    next();
});

appMiddlewareParamTrainners.use(parametro, async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
    next();
});
