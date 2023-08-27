import { check } from "express-validator";

export const GetAllSalonesTrainners= [

    check("id_salon_trainner")
    .notEmpty().withMessage("El campo salonTrainner es Obligatorio")
    .isNumeric().withMessage("El campo codTelefono debe ser de tipo Numerico"),

    check("id_trainner")
    .notEmpty().withMessage("El campo trainner es Obligatorio")
    .isNumeric().withMessage("El campo telefonoTrainner debe ser de tipo Numerico"),


    check("id_salon")
    .notEmpty().withMessage("El campo salon es Obligatorio")
    .isNumeric().withMessage("El campo telefonoTrainner debe ser de tipo Numerico"),

]