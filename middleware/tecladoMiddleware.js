import 'reflect-metadata';
import { Router } from "express";
import { GetAllTeclados } from "../dto/tecladoDTO.js";
import { validationResult } from "express-validator";
import { parametro } from  '../dto/parametroDTO.js';

export const appMiddlewareDataTeclado = Router();
export const appMiddlewareParamTeclado = Router();

appMiddlewareDataTeclado.use(GetAllTeclados, async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json(errors);
    next();
});

appMiddlewareParamTeclado.use(parametro, async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
    next();
});
