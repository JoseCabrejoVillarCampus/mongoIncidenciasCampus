import 'reflect-metadata';
import { Router } from "express";
import { GetAllPantallas } from "../dto/pantallaDTO.js";
import { validationResult } from "express-validator";
import { parametro } from  '../dto/parametroDTO.js';

export const appMiddlewareDataPantalla = Router();
export const appMiddlewareParamPantalla = Router();


appMiddlewareDataPantalla.use(GetAllPantallas, async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json(errors);
    next();
});


appMiddlewareParamPantalla.use(parametro, async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
    next();
});
