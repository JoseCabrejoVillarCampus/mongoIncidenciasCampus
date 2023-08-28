import express from "express";
import { coneccion } from "../../db/atlas.js";

let db = await coneccion();
let torre = db.collection("torre");
export const getTorreById = async (req, res, next) => {
    try {
        const id = parseInt(req.query.id);
        let result = await torre.aggregate([
            {
                $match: { "id_torre": id } 
            },
            {
                $lookup: {
                    from: "estado",
                    localField: "estado_pantalla",
                    foreignField: "id_estado",
                    as: "estado"
                }
            },
            {
                $unwind: "$estado"
            },
            {
                $project: {
                    "_id": 0,
                    "codigoTorre": "$id_torre",
                    "marca": "$marca_torre",
                    "color": "$color_torre",
                    "estado": "$estado.nombre_estado",
                }
            }
        ]).toArray();
        res.send(result); 

    } catch (error) {
        next(error);
    }
};
export const getTorreAll = (req, res, next)=>{
    return new Promise(async(resolve)=>{
        let result = await torre.aggregate([
            {
                $lookup: {
                    from: "estado",
                    localField: "estado_pantalla",
                    foreignField: "id_estado",
                    as: "estado"
                }
            },
            {
                $unwind: "$estado"
            },
            {
                $project: {
                    "_id": 0,
                    "codigoTorre": "$id_torre",
                    "marca": "$marca_torre",
                    "color": "$color_torre",
                    "estado": "$estado.nombre_estado",
                }
            }
        ]).toArray();
        res.send(result);
    }) 
};
export const postTorre = async(req, res)=>{
    try{
        console.log(req.body);
        let result = await torre.insertOne(req.body);
        res.status(201).send(result);
    } catch (error){
        console.log(error);
        }
};
export const putTorre = async (req, res)=>{
    try{
        const id = parseInt(req.query.id);
        let result = await torre.updateOne(
            { "id_torre": id},
            { $set: req.body }
        );
        res.send(result)
    } catch (error){
        res.status(422).send(error)
    }
};
export const delTorre = async (req, res)=>{
    try{
        const id = parseInt(req.query.id);
        let result = await torre.deleteOne(
            { "id_torre": id }
        );
        res.status(200).send(result)
    } catch (error){
        res.status(422).send(error)
    }
}

