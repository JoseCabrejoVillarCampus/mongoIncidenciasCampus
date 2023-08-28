import 'reflect-metadata';
import { Router } from "express";
import { GetAllTrainners } from "../dto/trainnersDTO.js";
import { validationResult } from "express-validator";
import { Params } from '../dto/parametroDTO.js';

export const appMiddlewareDataTrainners = Router();
export const appMiddlewareParamTrainners = Router();

appMiddlewareDataTrainners.use(GetAllTrainners, async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json(errors);
    next();
});

appMiddlewareParamTrainners.use(Params, async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
    next();
});
