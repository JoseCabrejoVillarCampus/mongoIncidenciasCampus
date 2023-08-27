import { check } from "express-validator";

export const GetAllEstados= [

    check("id_estado")
    .notEmpty().withMessage("El campo estado es Obligatorio")
    .isNumeric().withMessage("El campo estado debe ser de tipo Numerico"),

    check("nombre_estado")
    .notEmpty().withMessage("El campos nombre es Obligatorio")
    .isString().withMessage("El campos nombre debe ser de tipo String")
    .matches(/^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑüÜ,.#@\\s-]+$/).withMessage("Solo admite letras"),
]