import 'reflect-metadata';
import { Router } from "express";
import { GetAllEquipos } from "../dto/equipoDTO.js";
import { validationResult } from "express-validator";
import { Params } from '../dto/parametroDTO.js';

export const appMiddlewareDataEquipo = Router();
export const appMiddlewareParamEquipo = Router();


appMiddlewareDataEquipo.use(GetAllEquipos, async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json(errors);
    next();
});


appMiddlewareParamEquipo.use(Params, async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
    next();
});
