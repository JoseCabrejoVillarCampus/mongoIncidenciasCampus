import 'reflect-metadata';
import { Router } from "express";
import { GetAllSalonesTrainners } from "../dto/salon_trainnerDTO.js";
import { validationResult } from "express-validator";
import { parametro } from  '../dto/parametroDTO.js';

export const appMiddlewareDataSalonTrainner = Router();
export const appMiddlewareParamSalonTrainner = Router();

appMiddlewareDataSalonTrainner.use(GetAllSalonesTrainners, async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json(errors);
    let {id_salon_trainner:codigo,salon:salon, trainner:trainner} = req.body;
    let json = {codigo, salon, trainner};
    return res.status(200).json(json);
    next();
});

appMiddlewareParamSalonTrainner.use(parametro, async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
    next();
});
