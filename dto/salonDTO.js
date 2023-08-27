import { check } from "express-validator";

export const GetAllSalones= [

    check("id_salon")
    .notEmpty().withMessage("El campo salon es Obligatorio")
    .isNumeric().withMessage("El campo salon debe ser de tipo Numerico"),

    check("nombre_salon")
    .notEmpty().withMessage("El campos nombre es Obligatorio")
    .isString().withMessage("El campos nombre debe ser de tipo String")
    .matches(/^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑüÜ,.#@\\s-]+$/).withMessage("Solo admite letras"),


    check("area_salon")
    .notEmpty().withMessage("El campo area es Obligatorio")
    .isNumeric().withMessage("El campo area debe ser de tipo Numerico"),
]