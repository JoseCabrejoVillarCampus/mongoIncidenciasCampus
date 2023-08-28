import 'reflect-metadata';
import { Router } from "express";
import { GetAllDiademas } from "../dto/diademaDTO.js";
import { validationResult } from "express-validator";
import { Params } from '../dto/parametroDTO.js';

export const appMiddlewareDataDiadema = Router();
export const appMiddlewareParamDiadema = Router();


appMiddlewareDataDiadema.use(GetAllDiademas, async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json(errors);
    next();
});


appMiddlewareParamDiadema.use(Params, async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
    next();
});
