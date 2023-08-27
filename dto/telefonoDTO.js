import { check } from "express-validator";

export const GetAllTelefonos= [
    check("id_telefono")
    .notEmpty().withMessage("El campo codTelefono es Obligatorio")
    .isNumeric().withMessage("El campo codTelefono debe ser de tipo Numerico"),

    check("numero_telefono")
    .notEmpty().withMessage("El campo numeroTelefono es Obligatorio")
    .isString().withMessage("El campo numeroTelefono debe ser de tipo String")
    .matches(/^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑüÜ,.#@\\s-]+$/).withMessage("Solo admite letras"), 

    check("trainner_telefono")
    .notEmpty().withMessage("El campo telefonoTrainner es Obligatorio")
    .isNumeric().withMessage("El campo telefonoTrainner debe ser de tipo Numerico"),

]