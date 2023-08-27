import express from "express";
import { coneccion } from "../../db/atlas.js";

let db = await coneccion();
let equipo = db.collection("equipo");
export const getEquipoById = async (req, res, next) => {
    try {
        const id = parseInt(req.params.id);

        let result = await equipo.aggregate([
            {
                $match: { "id_equipo": id } 
            },
            {
                $lookup: {
                    from: "pantalla",
                    localField: "pantalla_equipo",
                    foreignField: "id_pantalla",
                    as: "pantalla"
                }
            },
            {
                $unwind: "$pantalla"
            },
            {
                $lookup: {
                    from: "torre",
                    localField: "torre_equipo",
                    foreignField: "id_torre",
                    as: "torre"
                }
            },
            {
                $unwind: "$torre"
            },
            {
                $lookup: {
                    from: "teclado",
                    localField: "teclado_equipo",
                    foreignField: "id_teclado",
                    as: "teclado"
                }
            },
            {
                $unwind: "$teclado"
            },{
                $lookup: {
                    from: "mouse",
                    localField: "mouse_equipo",
                    foreignField: "id_mouse",
                    as: "mouse"
                }
            },
            {
                $unwind: "$mouse"
            },{
                $lookup: {
                    from: "diadema",
                    localField: "diadema_equipo",
                    foreignField: "id_diadema",
                    as: "diadema"
                }
            },
            {
                $unwind: "$diadema"
            },{
                $lookup: {
                    from: "salon",
                    localField: "salon_equipo",
                    foreignField: "id_salon",
                    as: "salon"
                }
            },
            {
                $unwind: "$salon"
            },
            {
                $project: {
                    "_id": 0,
                    "equipo": "$id_equipo",
                    "pantalla": "$pantalla.id_pantalla",
                    "torre": "$torre.id_torre",
                    "teclado": "$teclado.id_teclado",
                    "mouse": "$mouse.id_mouse",
                    "diadema": "$diadema.id_diadema",
                    "salon": "$salon.nombre_salon",
                }
            }
        ]).toArray();
        res.send(result); 

    } catch (error) {
        next(error);
    }
};
export const getEquipoAll = (req, res, next)=>{
    return new Promise(async(resolve)=>{
        let result = await equipo.aggregate([
            {
                $lookup: {
                    from: "pantalla",
                    localField: "pantalla_equipo",
                    foreignField: "id_pantalla",
                    as: "pantalla"
                }
            },
            {
                $unwind: "$pantalla"
            },
            {
                $lookup: {
                    from: "torre",
                    localField: "torre_equipo",
                    foreignField: "id_torre",
                    as: "torre"
                }
            },
            {
                $unwind: "$torre"
            },
            {
                $lookup: {
                    from: "teclado",
                    localField: "teclado_equipo",
                    foreignField: "id_teclado",
                    as: "teclado"
                }
            },
            {
                $unwind: "$teclado"
            },{
                $lookup: {
                    from: "mouse",
                    localField: "mouse_equipo",
                    foreignField: "id_mouse",
                    as: "mouse"
                }
            },
            {
                $unwind: "$mouse"
            },{
                $lookup: {
                    from: "diadema",
                    localField: "diadema_equipo",
                    foreignField: "id_diadema",
                    as: "diadema"
                }
            },
            {
                $unwind: "$diadema"
            },{
                $lookup: {
                    from: "salon",
                    localField: "salon_equipo",
                    foreignField: "id_salon",
                    as: "salon"
                }
            },
            {
                $unwind: "$salon"
            },
            {
                $project: {
                    "_id": 0,
                    "equipo": "$id_equipo",
                    "pantalla": "$pantalla.id_pantalla",
                    "torre": "$torre.id_torre",
                    "teclado": "$teclado.id_teclado",
                    "mouse": "$mouse.id_mouse",
                    "diadema": "$diadema.id_diadema",
                    "salon": "$salon.nombre_salon",
                }
            }
        ]).toArray();
        res.send(result);
    }) 
};
export const postEquipo = async(req, res)=>{
    try{
        console.log(req.body);
        let result = await equipo.insertOne(req.body);
        res.status(201).send(result);
    } catch (error){
        console.log(error);
        }
};
export const putEquipo = async (req, res)=>{
    try{
        const id = parseInt(req.params.id);
        let result = await equipo.updateOne(
            { "id_equipo": id},
            { $set: req.body }
        );
        res.send(result)
    } catch (error){
        res.status(422).send(error)
    }
};
export const delEquipo = async (req, res)=>{
    try{
        const id = parseInt(req.params.id);
        let result = await equipo.deleteOne(
            { "id_equipo": id }
        );
        res.status(200).send(result)
    } catch (error){
        res.status(422).send(error)
    }
}

