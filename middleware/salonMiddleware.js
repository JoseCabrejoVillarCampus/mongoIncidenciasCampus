import 'reflect-metadata';
import { Router } from "express";
import { GetAllSalones } from "../dto/salonDTO.js";
import { validationResult } from "express-validator";
import { parametro } from  '../dto/parametroDTO.js';

export const appMiddlewareDataSalon = Router();
export const appMiddlewareParamSalon = Router();

appMiddlewareDataSalon.use(GetAllSalones, async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json(errors);
    let {id_salon:Codigosalon,salon:salon, area:area} = req.body;
    let json = {Codigosalon, salon, area};
    return res.status(200).json(json);
    next();
});

appMiddlewareParamSalon.use(parametro, async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
    next();
});
