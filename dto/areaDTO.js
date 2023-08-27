import { check } from "express-validator";

export const GetAllAreas= [

    check("id_area")
    .notEmpty().withMessage("El campo area es Obligatorio")
    .isNumeric().withMessage("El campo area debe ser de tipo Numerico"),

    check("nombre_area")
    .notEmpty().withMessage("El campos nombre es Obligatorio")
    .isString().withMessage("El campos nombre debe ser de tipo String")
    .matches(/^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑüÜ,.#@\\s-]+$/).withMessage("Solo admite letras"),
]