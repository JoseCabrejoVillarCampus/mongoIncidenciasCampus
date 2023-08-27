import express from "express";
import { coneccion } from "../../db/atlas.js";

let db = await coneccion();
let estado = db.collection("estado");
export const getEstadoById = async (req, res, next) => {
    try {
        const id = parseInt(req.params.id);
        let result = await estado.aggregate([
            {
                $match: { "id_estado": id } 
            },
            {
                $project: {
                    "_id": 0,
                    "codigoEstado": "$id_estado",
                    "estado": "$nombre_estado"
                }
            }
        ]).toArray();
        res.send(result); 

    } catch (error) {
        next(error);
    }
};
export const getEstadoAll = (req, res, next)=>{
    return new Promise(async(resolve)=>{
        let result = await estado.aggregate([
            {
                $project: {
                    "_id": 0,
                    "codigoEstado": "$id_estado",
                    "estado": "$nombre_estado"
                }
            }
        ]).toArray();
        res.send(result);
    }) 
};
export const postEstado = async(req, res)=>{
    try{
        console.log(req.body);
        let result = await estado.insertOne(req.body);
        res.status(201).send(result);
    } catch (error){
        console.log(error);
        }
};
export const putEstado = async (req, res)=>{
    try{
        const id = parseInt(req.params.id);
        let result = await estado.updateOne(
            { "id_estado": id},
            { $set: req.body }
        );
        res.send(result)
    } catch (error){
        res.status(422).send(error)
    }
};
export const delEstado = async (req, res)=>{
    try{
        const id = parseInt(req.params.id);
        let result = await estado.deleteOne(
            { "id_estado": id }
        );
        res.status(200).send(result)
    } catch (error){
        res.status(422).send(error)
    }
}

