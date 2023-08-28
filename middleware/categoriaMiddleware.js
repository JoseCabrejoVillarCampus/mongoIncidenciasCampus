import 'reflect-metadata';
import { Router } from "express";
import { GetAllCategorias } from "../dto/categoriaDTO.js";
import { validationResult } from "express-validator";
import { Params } from '../dto/parametroDTO.js';

export const appMiddlewareDataCategoria = Router();
export const appMiddlewareParamCategoria = Router();


appMiddlewareDataCategoria.use(GetAllCategorias, async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json(errors);
    next();
});


appMiddlewareParamCategoria.use(Params, async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
    next();
});
