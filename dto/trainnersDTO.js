import { check } from "express-validator";

export const GetAllTrainners= [

    check("id_trainner")
    .notEmpty().withMessage("El campo trainner es Obligatorio")
    .isNumeric().withMessage("El campo trainner debe ser de tipo Numerico"),

    check("nombre_trainner")
    .notEmpty().withMessage("El campos nombre es Obligatorio")
    .isString().withMessage("El campos nombre debe ser de tipo String")
    .matches(/^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑüÜ,.#@\\s-]+$/).withMessage("Solo admite letras"),


    check("jornada_trainner")
    .notEmpty().withMessage("El campos jornada es Obligatorio")
    .isString().withMessage("El campos jornada debe ser de tipo String")
    .matches(/^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑüÜ,.#@\\s-]+$/).withMessage("Solo admite letras"),
]