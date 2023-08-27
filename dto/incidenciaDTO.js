import { check } from "express-validator";

export const GetAllIncidencias= [
    check("id_incidencia")
    .notEmpty().withMessage("El codigoIncidencia es Obligatorio")
    .isNumeric().withMessage("El codigoIncidencia debe ser de tipo Numerico"),

    check("categoria_incidencia")
    .notEmpty().withMessage("El categoria es Obligatorio")
    .isNumeric().withMessage("El categoria debe ser de tipo Numerico"),

    check("tipo_incidencia")
    .notEmpty().withMessage("El tipo es Obligatorio")
    .isNumeric().withMessage("El tipo debe ser de tipo Numerico"),

    check("descripcion_incidencia")
    .notEmpty().withMessage("El descripcion es Obligatorio")
    .isString().withMessage("El descripcion debe ser de tipo String")
    .matches(/^[a-zA-Z]+$/).withMessage("Solo admite letras"),  

    check("fecha_incidencia")
    .notEmpty().withMessage("La fecha es Obligatorio")
    .isNumeric().withMessage("La fecha debe ser de tipo Numerico"),

    check("equipo_incidencia")
    .notEmpty().withMessage("El equipo es Obligatorio")
    .isNumeric().withMessage("El equipo debe ser de tipo Numerico"),

    check("lugar_incidencia")
    .notEmpty().withMessage("El lugar es Obligatorio")
    .isNumeric().withMessage("El lugar debe ser de tipo Numerico"),

    check("trainner_reporta_incidencia")
    .notEmpty().withMessage("El trainner es Obligatorio")
    .isNumeric().withMessage("El trainner debe ser de tipo Numerico"),  
]