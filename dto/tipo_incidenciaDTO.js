import { check } from "express-validator";

export const GetAllTipoIncidencia= [

    check("id_tipo_incidencia")
    .notEmpty().withMessage("El campo tipo es Obligatorio")
    .isNumeric().withMessage("El campo tipo debe ser de tipo Numerico"),

    check("tipo_incidencia")
    .notEmpty().withMessage("El campos tipoIncidencia es Obligatorio")
    .isString().withMessage("El campos tipoIncidencia debe ser de tipo String")
    .matches(/^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑüÜ,.#@\\s-]+$/).withMessage("Solo admite letras"),
]