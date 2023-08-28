import express from "express";
import { coneccion } from "../../db/atlas.js";

let db = await coneccion();
let teclado = db.collection("teclado");
export const getTecladoById = async (req, res, next) => {
    try {
        const id = parseInt(req.query.id);
        let result = await teclado.aggregate([
            {
                $match: { "id_teclado": id } 
            },
            {
                $lookup: {
                    from: "estado",
                    localField: "estado_teclado",
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
                    "codigoTeclado": "$id_teclado",
                    "marca": "$marca_teclado",
                    "color": "$color_teclado",
                    "estado": "$estado.nombre_estado",
                }
            }
        ]).toArray();
        res.send(result); 

    } catch (error) {
        next(error);
    }
};
export const getTecladoAll = (req, res, next)=>{
    return new Promise(async(resolve)=>{
        let result = await teclado.aggregate([
            {
                $lookup: {
                    from: "estado",
                    localField: "estado_teclado",
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
                    "codigoTeclado": "$id_teclado",
                    "marca": "$marca_teclado",
                    "color": "$color_teclado",
                    "estado": "$estado.nombre_estado",
                }
            }
        ]).toArray();
        res.send(result);
    }) 
};
export const postTeclado = async(req, res)=>{
    try{
        console.log(req.body);
        let result = await teclado.insertOne(req.body);
        res.status(201).send(result);
    } catch (error){
        console.log(error);
        }
};
export const putTeclado = async (req, res)=>{
    try{
        const id = parseInt(req.query.id);
        let result = await teclado.updateOne(
            { "id_teclado": id},
            { $set: req.body }
        );
        res.send(result)
    } catch (error){
        res.status(422).send(error)
    }
};
export const delTeclado = async (req, res)=>{
    try{
        const id = parseInt(req.query.id);
        let result = await teclado.deleteOne(
            { "id_teclado": id }
        );
        res.status(200).send(result)
    } catch (error){
        res.status(422).send(error)
    }
}

