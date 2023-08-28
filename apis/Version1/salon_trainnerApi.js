import express from "express";
import { coneccion } from "../../db/atlas.js";

let db = await coneccion();
let salon_trainner = db.collection("salon_trainner");
export const getSalonTrainnerById = async (req, res, next) => {
    try {
        const id = parseInt(req.query.id);
        let result = await salon_trainner.aggregate([
            {
                $match: { "id_salon_trainner": id } 
            },
            {
                $lookup: {
                    from: "salon",
                    localField: "id_salon",
                    foreignField: "id_salon",
                    as: "salon"
                }
            },
            {
                $unwind: "$salon"
            },
            {
                $lookup: {
                    from: "trainners",
                    localField: "id_trainner",
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
                    "codigo": "$id_salon_trainner",
                    "salon": "$salon.nombre_salon",
                    "trainner": "$trainner.nombre_trainner"
                }
            }
        ]).toArray();
        res.send(result); 

    } catch (error) {
        next(error);
    }
};
export const getSalonTrainnerAll = (req, res, next)=>{
    return new Promise(async(resolve)=>{
        let result = await salon_trainner.aggregate([
            {
                $lookup: {
                    from: "salon",
                    localField: "id_salon",
                    foreignField: "id_salon",
                    as: "salon"
                }
            },
            {
                $unwind: "$salon"
            },
            {
                $lookup: {
                    from: "trainners",
                    localField: "id_trainner",
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
                    "codigo": "$id_salon_trainner",
                    "salon": "$salon.nombre_salon",
                    "trainner": "$trainner.nombre_trainner"
                }
            }
        ]).toArray();
        res.send(result);
    }) 
};
export const postSalonTrainner = async(req, res)=>{
    try{
        console.log(req.body);
        let result = await salon_trainner.insertOne(req.body);
        res.status(201).send(result);
    } catch (error){
        console.log(error);
        }
};
export const putSalonTrainner = async (req, res)=>{
    try{
        const id = parseInt(req.query.id);
        let result = await salon_trainner.updateOne(
            { "id_salon_trainner": id},
            { $set: req.body }
        );
        res.send(result)
    } catch (error){
        res.status(422).send(error)
    }
};
export const delSalonTrainner = async (req, res)=>{
    try{
        const id = parseInt(req.query.id);
        let result = await salon_trainner.deleteOne(
            { "id_salon_trainner": id }
        );
        res.status(200).send(result)
    } catch (error){
        res.status(422).send(error)
    }
}

