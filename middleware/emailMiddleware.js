import 'reflect-metadata';
import { Router } from "express";
import { GetAllEmails } from "../dto/emailDTO.js";
import { validationResult } from "express-validator";
import { parametro } from  '../dto/parametroDTO.js';

export const appMiddlewareDataEmail = Router();
export const appMiddlewareParamEmail = Router();


appMiddlewareDataEmail.use(GetAllEmails, async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json(errors);
    let {id_email:codigoEmail,email:Email, emailTrainner: emailTrainner} = req.body;
    let json = {codigoEmail, Email, emailTrainner};
    return res.status(200).json(json);
    next();
});


appMiddlewareParamEmail.use(parametro, async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
    next();
});
