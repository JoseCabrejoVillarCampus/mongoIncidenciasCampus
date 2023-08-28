import express from "express";
import { coneccion } from "../../db/atlas.js";

let db = await coneccion();
let pantalla = db.collection("pantalla");
export const getPantallaById = async (req, res, next) => {
    try {
        const id = parseInt(req.query.id);
        let result = await pantalla.aggregate([
            {
                $match: { "id_pantalla": id } 
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
                    "codigoPantalla": "$id_pantalla",
                    "marca": "$marca_pantalla",
                    "color": "$color_pantalla",
                    "estado": "$estado.nombre_estado",
                }
            }
        ]).toArray();
        res.send(result); 

    } catch (error) {
        next(error);
    }
};
export const getPantallaAll = (req, res, next)=>{
    return new Promise(async(resolve)=>{
        let result = await pantalla.aggregate([
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
                    "codigoPantalla": "$id_pantalla",
                    "marca": "$marca_pantalla",
                    "color": "$color_pantalla",
                    "estado": "$estado.nombre_estado",
                }
            }
        ]).toArray();
        res.send(result);
    }) 
};
export const postPantalla = async(req, res)=>{
    try{
        console.log(req.body);
        let result = await pantalla.insertOne(req.body);
        res.status(201).send(result);
    } catch (error){
        console.log(error);
        }
};
export const putPantalla = async (req, res)=>{
    try{
        const id = parseInt(req.query.id);
        let result = await pantalla.updateOne(
            { "id_pantalla": id},
            { $set: req.body }
        );
        res.send(result)
    } catch (error){
        res.status(422).send(error)
    }
};
export const delPantalla = async (req, res)=>{
    try{
        const id = parseInt(req.query.id);
        let result = await pantalla.deleteOne(
            { "id_pantalla": id }
        );
        res.status(200).send(result)
    } catch (error){
        res.status(422).send(error)
    }
}

