import { check } from "express-validator";

export const GetAllDiademas= [
    check("id_diadema")
    .notEmpty().withMessage("El campo diadema es Obligatorio")
    .isNumeric().withMessage("El campo diadema debe ser de tipo Numerico"),

    check("marca_diadema")
    .notEmpty().withMessage("El campos marca es Obligatorio")
    .isString().withMessage("El campos marca debe ser de tipo String")
    .matches(/^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑüÜ,.#@\\s-]+$/).withMessage("Solo admite letras"), 

    check("color_diadema")
    .notEmpty().withMessage("El color es Obligatorio")
    .isString().withMessage("El color debe ser de tipo String")
    .matches(/^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑüÜ,.#@\\s-]+$/).withMessage("Solo admite letras"), 

    check("estado_diadema")
    .notEmpty().withMessage("El estado es Obligatorio")
    .isNumeric().withMessage("El estado debe ser de tipo Numerico"),

]