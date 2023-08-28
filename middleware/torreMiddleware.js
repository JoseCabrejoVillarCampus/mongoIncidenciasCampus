import 'reflect-metadata';
import { Router } from "express";
import { GetAllTorres } from "../dto/torreDTO.js";
import { validationResult } from "express-validator";
import { Params } from '../dto/parametroDTO.js';

export const appMiddlewareDataTorre = Router();
export const appMiddlewareParamTorre = Router();

appMiddlewareDataTorre.use(GetAllTorres, async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json(errors);
    next();
});

appMiddlewareParamTorre.use(Params, async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
    next();
});
