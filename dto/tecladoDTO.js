import { check } from "express-validator";

export const GetAllTeclados= [
    check("id_teclado")
    .notEmpty().withMessage("El campo teclado es Obligatorio")
    .isNumeric().withMessage("El campo teclado debe ser de tipo Numerico"),

    check("marca_teclado")
    .notEmpty().withMessage("El campos marca es Obligatorio")
    .isString().withMessage("El campos marca debe ser de tipo String")
    .matches(/^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑüÜ,.#@\\s-]+$/).withMessage("Solo admite letras"), 

    check("color_teclado")
    .notEmpty().withMessage("El color es Obligatorio")
    .isString().withMessage("El color debe ser de tipo String")
    .matches(/^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑüÜ,.#@\\s-]+$/).withMessage("Solo admite letras"), 

    check("estado_teclado")
    .notEmpty().withMessage("El estado es Obligatorio")
    .isNumeric().withMessage("El estado debe ser de tipo Numerico"),

]