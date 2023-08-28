import 'reflect-metadata';
import { Router } from "express";
import { GetAllTelefonos } from "../dto/telefonoDTO.js";
import { validationResult } from "express-validator";
import { Params } from '../dto/parametroDTO.js';

export const appMiddlewareDataTelefono = Router();
export const appMiddlewareParamTelefono = Router();

appMiddlewareDataTelefono.use(GetAllTelefonos, async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json(errors);
    next();
});

appMiddlewareParamTelefono.use(Params, async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
    next();
});