import express from "express";
import { coneccion } from "../../BackEnd/db/atlas.js";

let db = await coneccion();
let telefono = db.collection("telefono");
export const getTelefonoById = async (req, res, next) => {
    try {
        const id = parseInt(req.params.id);
        let result = await telefono.aggregate([
            {
                $match: { "id_telefono": id } 
            },
            {
                $lookup: {
                    from: "trainners",
                    localField: "trainner_telefono",
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
                    "codigoTelefono": "$id_telefono",
                    "numeroTelefono": "$numero_telefono",
                    "trainner": "$trainner.nombre_trainner"
                }
            }
        ]).toArray();
        res.send(result); 

    } catch (error) {
        next(error);
    }
};
export const getTelefonoAll = (req, res, next)=>{
    return new Promise(async(resolve)=>{
        let result = await telefono.aggregate([
            {
                $lookup: {
                    from: "trainners",
                    localField: "trainner_telefono",
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
                    "codigoTelefono": "$id_telefono",
                    "numeroTelefono": "$numero_telefono",
                    "trainner": "$trainner.nombre_trainner"
                }
            }
        ]).toArray();
        res.send(result);
    }) 
};
export const postTelefono = async(req, res)=>{
    try{
        console.log(req.body);
        let result = await telefono.insertOne(req.body);
        res.status(201).send(result);
    } catch (error){
        console.log(error);
        }
};
export const putTelefono = async (req, res)=>{
    try{
        const id = parseInt(req.params.id);
        let result = await telefono.updateOne(
            { "id_telefono": id},
            { $set: req.body }
        );
        res.send(result)
    } catch (error){
        res.status(422).send(error)
    }
};
export const delTelefono = async (req, res)=>{
    try{
        const id = parseInt(req.params.id);
        let result = await telefono.deleteOne(
            { "id_telefono": id }
        );
        res.status(200).send(result)
    } catch (error){
        res.status(422).send(error)
    }
}

