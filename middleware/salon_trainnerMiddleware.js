import 'reflect-metadata';
import { Router } from "express";
import { GetAllSalonesTrainners } from "../dto/salon_trainnerDTO.js";
import { validationResult } from "express-validator";
import { Params } from '../dto/parametroDTO.js';

export const appMiddlewareDataSalonTrainner = Router();
export const appMiddlewareParamSalonTrainner = Router();

appMiddlewareDataSalonTrainner.use(GetAllSalonesTrainners, async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json(errors);
    next();
});

appMiddlewareParamSalonTrainner.use(Params, async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
    next();
});
