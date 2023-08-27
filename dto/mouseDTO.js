import { check } from "express-validator";

export const GetAllMouses= [
    check("id_mouse")
    .notEmpty().withMessage("El campo mouse es Obligatorio")
    .isNumeric().withMessage("El campo mouse debe ser de tipo Numerico"),

    check("marca_mouse")
    .notEmpty().withMessage("El campos marca es Obligatorio")
    .isString().withMessage("El campos marca debe ser de tipo String")
    .matches(/^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑüÜ,.#@\\s-]+$/).withMessage("Solo admite letras"), 

    check("color_mouse")
    .notEmpty().withMessage("El color es Obligatorio")
    .isString().withMessage("El color debe ser de tipo String")
    .matches(/^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑüÜ,.#@\\s-]+$/).withMessage("Solo admite letras"), 

    check("estado_mouse")
    .notEmpty().withMessage("El estado es Obligatorio")
    .isNumeric().withMessage("El estado debe ser de tipo Numerico"),

]