import 'reflect-metadata';
import { Router } from "express";
import { GetAllCategorias } from "../dto/categoriaDTO.js";
import { validationResult } from "express-validator";
import { parametro } from  '../dto/parametroDTO.js';

export const appMiddlewareDataCategoria = Router();
export const appMiddlewareParamCategoria = Router();


appMiddlewareDataCategoria.use(GetAllCategorias, async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json(errors);
    let {id_categoria:codigoCategoria,tipo_categoria:tipo} = req.body;
    let json = {codigoCategoria, tipo};
    return res.status(200).json(json);
    next();
});


appMiddlewareParamCategoria.use(parametro, async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
    next();
});
