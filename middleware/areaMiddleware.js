import 'reflect-metadata';
import { Router } from "express";
import { GetAllAreas } from "../dto/areaDTO.js";
import { validationResult } from "express-validator";
import { Params } from '../dto/parametroDTO.js';

export const appMiddlewareDataArea = Router();
export const appMiddlewareParamArea = Router();


appMiddlewareDataArea.use(GetAllAreas, async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json(errors);
    next();
});


appMiddlewareParamArea.use(Params, async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
    next();
});
