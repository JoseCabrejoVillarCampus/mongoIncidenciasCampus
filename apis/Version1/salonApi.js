import express from "express";
import { coneccion } from "../../db/atlas.js";

let db = await coneccion();
let salon = db.collection("salon");
export const getSalonById = async (req, res, next) => {
    try {
        const id = parseInt(req.params.id);
        let result = await salon.aggregate([
            {
                $match: { "id_salon": id } 
            },
            {
                $lookup: {
                    from: "area",
                    localField: "area_salon",
                    foreignField: "id_area",
                    as: "area"
                }
            },
            {
                $unwind: "$area"
            },
            {
                $project: {
                    "_id": 0,
                    "Codigosalon": "$id_salon",
                    "salon": "$nombre_salon",
                    "area": "$area.nombre_area"
                }
            }
        ]).toArray();
        res.send(result); 

    } catch (error) {
        next(error);
    }
};
export const getSalonAll = (req, res, next)=>{
    return new Promise(async(resolve)=>{
        let result = await salon.aggregate([
            {
                $lookup: {
                    from: "area",
                    localField: "area_salon",
                    foreignField: "id_area",
                    as: "area"
                }
            },
            {
                $unwind: "$area"
            },
            {
                $project: {
                    "_id": 0,
                    "Codigosalon": "$id_salon",
                    "salon": "$nombre_salon",
                    "area": "$area.nombre_area"
                }
            }
        ]).toArray();
        res.send(result);
    }) 
};
export const postSalon = async(req, res)=>{
    try{
        console.log(req.body);
        let result = await salon.insertOne(req.body);
        res.status(201).send(result);
    } catch (error){
        console.log(error);
        }
};
export const putSalon = async (req, res)=>{
    try{
        const id = parseInt(req.params.id);
        let result = await salon.updateOne(
            { "id_salon": id},
            { $set: req.body }
        );
        res.send(result)
    } catch (error){
        res.status(422).send(error)
    }
};
export const delSalon = async (req, res)=>{
    try{
        const id = parseInt(req.params.id);
        let result = await salon.deleteOne(
            { "id_salon": id }
        );
        res.status(200).send(result)
    } catch (error){
        res.status(422).send(error)
    }
}

