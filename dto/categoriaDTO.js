import { check } from "express-validator";

export const GetAllCategorias= [

    check("id_categoria")
    .notEmpty().withMessage("El campo categoria es Obligatorio")
    .isNumeric().withMessage("El campo categoria debe ser de tipo Numerico"),

    check("tipo_categoria")
    .notEmpty().withMessage("El campos tipo es Obligatorio")
    .isString().withMessage("El campos tipo debe ser de tipo String")
    .matches(/^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑüÜ,.#@\\s-]+$/).withMessage("Solo admite letras"),
]