import { check } from "express-validator";

export const GetAllAreas= [

    check("id_area")
    .notEmpty().withMessage("El campo id_area es Obligatorio")
    .isNumeric().withMessage("El campo id_area debe ser de tipo Numerico"),

    check("nombre_area")
    .notEmpty().withMessage("El campo nombre_area es Obligatorio")
    .isString().withMessage("El campo nombre_area debe ser de tipo String")
    .matches(/^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑüÜ,.#@\\s-]+$/).withMessage("Solo admite letras")

]


