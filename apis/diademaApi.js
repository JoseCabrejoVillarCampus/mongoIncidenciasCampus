import express from "express";
import { coneccion } from "../../BackEnd/db/atlas.js";

let db = await coneccion();
let diadema = db.collection("diadema");
export const getDiademaById = async (req, res, next) => {
    try {
        const id = parseInt(req.params.id);
        let result = await diadema.aggregate([
            {
                $match: { "id_diadema": id } 
            },
            {
                $lookup: {
                    from: "estado",
                    localField: "estado_diadema",
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
                    "codigoDiadema": "$id_diadema",
                    "marca": "$marca_diadema",
                    "color": "$color_diadema",
                    "estado": "$estado.nombre_estado",
                }
            }
        ]).toArray();
        res.send(result); 

    } catch (error) {
        next(error);
    }
};
export const getDiademaAll = (req, res, next)=>{
    return new Promise(async(resolve)=>{
        let result = await diadema.aggregate([
            {
                $lookup: {
                    from: "estado",
                    localField: "estado_diadema",
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
                    "codigoDiadema": "$id_diadema",
                    "marca": "$marca_diadema",
                    "color": "$color_diadema",
                    "estado": "$estado.nombre_estado",
                }
            }
        ]).toArray();
        res.send(result);
    }) 
};
export const postDiadema = async(req, res)=>{
    try{
        console.log(req.body);
        let result = await diadema.insertOne(req.body);
        res.status(201).send(result);
    } catch (error){
        console.log(error);
        }
};
export const putDiadema = async (req, res)=>{
    try{
        const id = parseInt(req.params.id);
        let result = await diadema.updateOne(
            { "id_diadema": id},
            { $set: req.body }
        );
        res.send(result)
    } catch (error){
        res.status(422).send(error)
    }
};
export const delDiadema = async (req, res)=>{
    try{
        const id = parseInt(req.params.id);
        let result = await diadema.deleteOne(
            { "id_diadema": id }
        );
        res.status(200).send(result)
    } catch (error){
        res.status(422).send(error)
    }
}

