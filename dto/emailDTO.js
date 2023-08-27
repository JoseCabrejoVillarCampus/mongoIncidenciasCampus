import { check } from "express-validator";

export const GetAllEmails= [
    check("id_email")
    .notEmpty().withMessage("El campo codigoEmail es Obligatorio")
    .isNumeric().withMessage("El campo codigoEmail debe ser de tipo Numerico"),

    check("email")
    .notEmpty().withMessage("El campo Email es Obligatorio")
    .isString().withMessage("El campo Email debe ser de tipo String")
    .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/).withMessage("Solo admite letras"), 

    check("trainner_email")
    .notEmpty().withMessage("El campo emailTrainner es Obligatorio")
    .isNumeric().withMessage("El campo emailTrainner debe ser de tipo Numerico"),

]