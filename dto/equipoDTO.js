import { check } from "express-validator";

export const GetAllEquipos= [
    check("id_equipo")
    .notEmpty().withMessage("El equipo es Obligatorio")
    .isNumeric().withMessage("El equipo debe ser de tipo Numerico"),

    check("pantalla_equipo")
    .notEmpty().withMessage("El pantalla es Obligatorio")
    .isNumeric().withMessage("El pantalla debe ser de tipo Numerico"),

    check("torre_equipo")
    .notEmpty().withMessage("El torre es Obligatorio")
    .isNumeric().withMessage("El torre debe ser de tipo Numerico"),

    check("teclado_equipo")
    .notEmpty().withMessage("El teclado es Obligatorio")
    .isNumeric().withMessage("El teclado debe ser de tipo Numerico"),

    check("mouse_equipo")
    .notEmpty().withMessage("El mouse es Obligatorio")
    .isNumeric().withMessage("El mouse debe ser de tipo Numerico"),

    check("diadema_equipo")
    .notEmpty().withMessage("El diadema es Obligatorio")
    .isNumeric().withMessage("El diadema debe ser de tipo Numerico"),

    check("salon_equipo")
    .notEmpty().withMessage("El salon es Obligatorio")
    .isNumeric().withMessage("El salon debe ser de tipo Numerico"),

]