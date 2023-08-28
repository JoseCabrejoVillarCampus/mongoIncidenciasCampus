import 'reflect-metadata';
import { Router } from "express";
import { GetAllEmails } from "../dto/emailDTO.js";
import { validationResult } from "express-validator";
import { Params } from '../dto/parametroDTO.js';

export const appMiddlewareDataEmail = Router();
export const appMiddlewareParamEmail = Router();


appMiddlewareDataEmail.use(GetAllEmails, async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json(errors);
    next();
});


appMiddlewareParamEmail.use(Params, async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
    next();
});
