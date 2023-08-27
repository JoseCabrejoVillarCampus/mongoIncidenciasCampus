import express from "express";
import { coneccion } from "../../BackEnd/db/atlas.js";

let db = await coneccion();
let mouse = db.collection("mouse");
export const getMouseById = async (req, res, next) => {
    try {
        const id = parseInt(req.params.id);
        let result = await mouse.aggregate([
            {
                $match: { "id_mouse": id } 
            },
            {
                $lookup: {
                    from: "estado",
                    localField: "estado_mouse",
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
                    "codigoMouse": "$id_mouse",
                    "marca": "$marca_mouse",
                    "color": "$color_mouse",
                    "estado": "$estado.nombre_estado",
                }
            }
        ]).toArray();
        res.send(result); 

    } catch (error) {
        next(error);
    }
};
export const getMouseAll = (req, res, next)=>{
    return new Promise(async(resolve)=>{
        let result = await mouse.aggregate([
            {
                $lookup: {
                    from: "estado",
                    localField: "estado_mouse",
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
                    "codigoMouse": "$id_mouse",
                    "marca": "$marca_mouse",
                    "color": "$color_mouse",
                    "estado": "$estado.nombre_estado",
                }
            }
        ]).toArray();
        res.send(result);
    }) 
};
export const postMouse = async(req, res)=>{
    try{
        console.log(req.body);
        let result = await mouse.insertOne(req.body);
        res.status(201).send(result);
    } catch (error){
        console.log(error);
        }
};
export const putMouse = async (req, res)=>{
    try{
        const id = parseInt(req.params.id);
        let result = await mouse.updateOne(
            { "id_mouse": id},
            { $set: req.body }
        );
        res.send(result)
    } catch (error){
        res.status(422).send(error)
    }
};
export const delMouse = async (req, res)=>{
    try{
        const id = parseInt(req.params.id);
        let result = await mouse.deleteOne(
            { "id_mouse": id }
        );
        res.status(200).send(result)
    } catch (error){
        res.status(422).send(error)
    }
}

