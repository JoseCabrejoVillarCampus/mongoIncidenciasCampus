import express from "express";
import { coneccion } from "../../BackEnd/db/atlas.js";

let db = await coneccion();
let tipo_incidencia = db.collection("tipo_incidencia");
export const getTipoById = async (req, res, next) => {
    try {
        const id = parseInt(req.params.id);
        let result = await telefono.aggregate([
            {
                $match: { "id_tipo_incidencia": id } 
            },
            {
                $project: {
                    "_id": 0,
                    "tipo": "$id_tipo_incidencia",
                    "tipoIncidente": "$tipo_incidencia"
                }
            }
        ]).toArray();
        res.send(result); 

    } catch (error) {
        next(error);
    }
};
export const getTipoAll = (req, res, next)=>{
    return new Promise(async(resolve)=>{
        let result = await tipo_incidencia.aggregate([
            {
                $project: {
                    "_id": 0,
                    "tipo": "$id_tipo_incidencia",
                    "tipoIncidente": "$tipo_incidencia"
                }
            }
        ]).toArray();
        res.send(result);
    }) 
};
export const postTipo = async(req, res)=>{
    try{
        console.log(req.body);
        let result = await tipo_incidencia.insertOne(req.body);
        res.status(201).send(result);
    } catch (error){
        console.log(error);
        }
};
export const putTipo = async (req, res)=>{
    try{
        const id = parseInt(req.params.id);
        let result = await tipo_incidencia.updateOne(
            { "id_tipo_incidencia": id},
            { $set: req.body }
        );
        res.send(result)
    } catch (error){
        res.status(422).send(error)
    }
};
export const delTipo = async (req, res)=>{
    try{
        const id = parseInt(req.params.id);
        let result = await tipo_incidencia.deleteOne(
            { "id_tipo_incidencia": id }
        );
        res.status(200).send(result)
    } catch (error){
        res.status(422).send(error)
    }
}

