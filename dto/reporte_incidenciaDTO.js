import { check } from "express-validator";

export const GetAllReportes= [

    check("id_reporte")
    .notEmpty().withMessage("El campo reporte es Obligatorio")
    .isNumeric().withMessage("El campo reporte debe ser de tipo Numerico"),

    check("fecha_reporte")
    .notEmpty().withMessage("El campos fecha es Obligatorio")
    .isString().withMessage("El campos fecha debe ser de tipo String")
    .matches(/^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑüÜ,.#@\\s-]+$/).withMessage("Solo admite letras"),
]