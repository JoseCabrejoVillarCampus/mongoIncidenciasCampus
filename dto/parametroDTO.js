import { param } from "express-validator";

export const Params = [
    param("id")
        .notEmpty().withMessage("El id del parametro area es Obligatorio")
        .isNumeric().withMessage("El id del parametro debe ser de tipo Numerico")
        .matches(/^[0-9]+$/).withMessage("Solo admite numeros")
];