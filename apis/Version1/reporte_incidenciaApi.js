import express from "express";
import { coneccion } from "../../db/atlas.js";

let db = await coneccion();
let reporte_incidencia = db.collection("reporte_incidencia");
export const getReporteById = async (req, res, next) => {
    try {
        const id = parseInt(req.query.id);
        let result = await reporte_incidencia.aggregate([
            {
                $match: { "id_reporte": id } 
            },
            {
                $project: {
                    "_id": 0,
                    "reporte": "$id_reporte",
                    "fecha": "$fecha_reporte"
                }
            }
        ]).toArray();
        res.send(result); 

    } catch (error) {
        next(error);
    }
};
export const getReporteAll = (req, res, next)=>{
    return new Promise(async(resolve)=>{
        let result = await reporte_incidencia.aggregate([
            {
                $project: {
                    "_id": 0,
                    "reporte": "$id_reporte",
                    "fecha": "$fecha_reporte"
                }
            }
        ]).toArray();
        res.send(result);
    }) 
};
export const postReporte = async(req, res)=>{
    try{
        console.log(req.body);
        let result = await reporte_incidencia.insertOne(req.body);
        res.status(201).send(result);
    } catch (error){
        console.log(error);
        }
};
export const putReporte = async (req, res)=>{
    try{
        const id = parseInt(req.query.id);
        let result = await reporte_incidencia.updateOne(
            { "id_reporte": id},
            { $set: req.body }
        );
        res.send(result)
    } catch (error){
        res.status(422).send(error)
    }
};
export const delReporte = async (req, res)=>{
    try{
        const id = parseInt(req.query.id);
        let result = await reporte_incidencia.deleteOne(
            { "id_reporte": id }
        );
        res.status(200).send(result)
    } catch (error){
        res.status(422).send(error)
    }
}

