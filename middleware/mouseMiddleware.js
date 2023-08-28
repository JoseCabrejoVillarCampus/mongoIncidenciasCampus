import 'reflect-metadata';
import { Router } from "express";
import { GetAllMouses } from "../dto/mouseDTO.js";
import { validationResult } from "express-validator";
import { Params } from '../dto/parametroDTO.js';

export const appMiddlewareDataMouse = Router();
export const appMiddlewareParamMouse = Router();


appMiddlewareDataMouse.use(GetAllMouses, async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json(errors);
    next();
});


appMiddlewareParamMouse.use(Params, async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
    next();
});
