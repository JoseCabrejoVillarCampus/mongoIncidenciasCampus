import express from "express";
import { coneccion } from "../../db/atlas.js";

let db = await coneccion();
let incidencia = db.collection("incidencia");
export const getIncidenciaById = async (req, res, next) => {
    try {
        const id = parseInt(req.query.id);

        let result = await incidencia.aggregate([
            {
                $match: { "id_incidencia": id } 
            },
            {
                $lookup: {
                    from: "categoria",
                    localField: "categoria_incidencia",
                    foreignField: "id_categoria",
                    as: "categoria"
                }
            },
            {
                $unwind: "$categoria"
            },
            {
                $lookup: {
                    from: "reporte_incidencia",
                    localField: "fecha_incidencia",
                    foreignField: "id_reporte",
                    as: "reporte_incidencia"
                }
            },
            {
                $unwind: "$reporte_incidencia"
            },
            {
                $lookup: {
                    from: "equipo",
                    localField: "equipo_incidencia",
                    foreignField: "id_equipo",
                    as: "equipo"
                }
            },
            {
                $unwind: "$equipo"
            },
            {
                $lookup: {
                    from: "salon",
                    localField: "lugar_incidencia",
                    foreignField: "id_salon",
                    as: "lugar"
                }
            },
            {
                $unwind: "$lugar"
            },
            {
                $lookup: {
                    from: "trainners",
                    localField: "trainner_reporta_incidencia",
                    foreignField: "id_trainner",
                    as: "trainner"
                }
            },
            {
                $unwind: "$trainner"
            },
            {
                $project: {
                    "_id": 0,
                    "codigoIncidencia": "$id_incidencia",
                    "categoria": "$categoria.tipo_categoria",
                    "fecha": "$reporte_incidencia.fecha_reporte",
                    "equipo": "$equipo.id_equipo",
                    "lugar": "$lugar.nombre_salon",
                    "trainner": "$trainner.nombre_trainner"
                }
            }
        ]).toArray();
        res.send(result); 

    } catch (error) {
        next(error);
    }
};
export const getIncidenciaAll = (req, res, next)=>{
    return new Promise(async(resolve)=>{
        let result = await incidencia.aggregate([
            {
                $lookup: {
                    from: "categoria",
                    localField: "categoria_incidencia",
                    foreignField: "id_categoria",
                    as: "categoria"
                }
            },
            {
                $unwind: "$categoria"
            },
            {
                $lookup: {
                    from: "reporte_incidencia",
                    localField: "fecha_incidencia",
                    foreignField: "id_reporte",
                    as: "reporte_incidencia"
                }
            },
            {
                $unwind: "$reporte_incidencia"
            },
            {
                $lookup: {
                    from: "equipo",
                    localField: "equipo_incidencia",
                    foreignField: "id_equipo",
                    as: "equipo"
                }
            },
            {
                $unwind: "$equipo"
            },
            {
                $lookup: {
                    from: "salon",
                    localField: "lugar_incidencia",
                    foreignField: "id_salon",
                    as: "lugar"
                }
            },
            {
                $unwind: "$lugar"
            },
            {
                $lookup: {
                    from: "trainners",
                    localField: "trainner_reporta_incidencia",
                    foreignField: "id_trainner",
                    as: "trainner"
                }
            },
            {
                $unwind: "$trainner"
            },
            {
                $project: {
                    "_id": 0,
                    "codigoIncidencia": "$id_incidencia",
                    "categoria": "$categoria.tipo_categoria",
                    "fecha": "$reporte_incidencia.fecha_reporte",
                    "equipo": "$equipo.id_equipo",
                    "lugar": "$lugar.nombre_salon",
                    "trainner": "$trainner.nombre_trainner"
                }
            }
        ]).toArray();
        res.send(result);
    }) 
};
export const postIncidencia = async(req, res)=>{
    try{
        console.log(req.body);
        let result = await incidencia.insertOne(req.body);
        res.status(201).send(result);
    } catch (error){
        console.log(error);
        }
};
export const putIncidencia = async (req, res)=>{
    try{
        const id = parseInt(req.query.id);
        let result = await incidencia.updateOne(
            { "id_incidencia": id},
            { $set: req.body }
        );
        res.send(result)
    } catch (error){
        res.status(422).send(error)
    }
};
export const delIncidencia = async (req, res)=>{
    try{
        const id = parseInt(req.query.id);
        let result = await incidencia.deleteOne(
            { "id_incidencia": id }
        );
        res.status(200).send(result)
    } catch (error){
        res.status(422).send(error)
    }
}

