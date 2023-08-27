import express from "express";
import { coneccion } from "../../BackEnd/db/atlas.js";

let db = await coneccion();
let trainners = db.collection("trainners");
export const getTrainnerById = async (req, res, next) => {
    try {
        const id = parseInt(req.params.id);
        let result = await telefono.aggregate([
            {
                $match: { "id_trainner": id } 
            },
            {
                $project: {
                    "_id": 0,
                    "codigoTrainner": "$id_trainner",
                    "nombre": "$nombre_trainner",
                    "jornada": "$jornada_trainner"
                }
            }
        ]).toArray();
        res.send(result); 

    } catch (error) {
        next(error);
    }
};
export const getTrainnerAll = (req, res, next)=>{
    return new Promise(async(resolve)=>{
        let result = await trainners.aggregate([
            {
                $project: {
                    "_id": 0,
                    "codigoTrainner": "$id_trainner",
                    "nombre": "$nombre_trainner",
                    "jornada": "$jornada_trainner"
                }
            }
        ]).toArray();
        res.send(result);
    }) 
};
export const postTrainner = async(req, res)=>{
    try{
        console.log(req.body);
        let result = await trainners.insertOne(req.body);
        res.status(201).send(result);
    } catch (error){
        console.log(error);
        }
};
export const putTrainner = async (req, res)=>{
    try{
        const id = parseInt(req.params.id);
        let result = await trainners.updateOne(
            { "id_trainner": id},
            { $set: req.body }
        );
        res.send(result)
    } catch (error){
        res.status(422).send(error)
    }
};
export const delTrainner = async (req, res)=>{
    try{
        const id = parseInt(req.params.id);
        let result = await trainners.deleteOne(
            { "id_trainner": id }
        );
        res.status(200).send(result)
    } catch (error){
        res.status(422).send(error)
    }
}

