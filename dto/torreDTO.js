import { check } from "express-validator";

export const GetAllTorres= [
    check("id_torre")
    .notEmpty().withMessage("El campo torre es Obligatorio")
    .isNumeric().withMessage("El campo torre debe ser de tipo Numerico"),

    check("marca_torre")
    .notEmpty().withMessage("El campos marca es Obligatorio")
    .isString().withMessage("El campos marca debe ser de tipo String")
    .matches(/^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑüÜ,.#@\\s-]+$/).withMessage("Solo admite letras"), 

    check("color_torre")
    .notEmpty().withMessage("El color es Obligatorio")
    .isString().withMessage("El color debe ser de tipo String")
    .matches(/^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑüÜ,.#@\\s-]+$/).withMessage("Solo admite letras"), 

    check("estado_torre")
    .notEmpty().withMessage("El estado es Obligatorio")
    .isNumeric().withMessage("El estado debe ser de tipo Numerico"),

]