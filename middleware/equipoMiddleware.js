import 'reflect-metadata';
import { Router } from "express";
import { GetAllEquipos } from "../dto/equipoDTO.js";
import { validationResult } from "express-validator";
import { parametro } from  '../dto/parametroDTO.js';

export const appMiddlewareDataEquipo = Router();
export const appMiddlewareParamEquipo = Router();


appMiddlewareDataEquipo.use(GetAllEquipos, async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json(errors);
    let {id_equipo:equipo,pantalla:pantalla, torre: torre, teclado:teclado,mouse:mouse, diadema: diadema, salon: salon} = req.body;
    let json = {equipo, pantalla, torre, teclado, mouse, diadema, salon};
    return res.status(200).json(json);
    next();
});


appMiddlewareParamEquipo.use(parametro, async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
    next();
});
