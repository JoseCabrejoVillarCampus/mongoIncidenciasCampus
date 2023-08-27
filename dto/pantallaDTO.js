import { check } from "express-validator";

export const GetAllPantallas= [
    check("id_pantalla")
    .notEmpty().withMessage("El campo pantalla es Obligatorio")
    .isNumeric().withMessage("El campo pantalla debe ser de tipo Numerico"),

    check("marca_pantalla")
    .notEmpty().withMessage("El campos marca es Obligatorio")
    .isString().withMessage("El campos marca debe ser de tipo String")
    .matches(/^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑüÜ,.#@\\s-]+$/).withMessage("Solo admite letras"), 

    check("color_pantalla")
    .notEmpty().withMessage("El color es Obligatorio")
    .isString().withMessage("El color debe ser de tipo String")
    .matches(/^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑüÜ,.#@\\s-]+$/).withMessage("Solo admite letras"), 

    check("estado_pantalla")
    .notEmpty().withMessage("El estado es Obligatorio")
    .isNumeric().withMessage("El estado debe ser de tipo Numerico"),

]