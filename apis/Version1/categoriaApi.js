import express from "express";
import { coneccion } from "../../db/atlas.js";

let db = await coneccion();
let categoria = db.collection("categoria");
export const getCategoriaById = async (req, res, next) => {
    try {
        const id = parseInt(req.params.id);
        let result = await categoria.aggregate([
            {
                $match: { "id_categoria": id } 
            },
            {
                $project: {
                    "_id": 0,
                    "codigoCategoria": "$id_categoria",
                    "tipo": "$tipo_categoria",
                }
            }
        ]).toArray();
        res.send(result); 

    } catch (error) {
        next(error);
    }
};
export const getCategoriaAll = (req, res, next)=>{
    return new Promise(async(resolve)=>{
        let result = await categoria.aggregate([
            {
                $project: {
                    "_id": 0,
                    "codigoCategoria": "$id_categoria",
                    "tipo": "$tipo_categoria",
                }
            }
        ]).toArray();
        res.send(result);
    }) 
};
export const postCategoria = async(req, res)=>{
    try{
        console.log(req.body);
        let result = await categoria.insertOne(req.body);
        res.status(201).send(result);
    } catch (error){
        console.log(error);
        }
};
export const putCategoria = async (req, res)=>{
    try{
        const id = parseInt(req.params.id);
        let result = await categoria.updateOne(
            { "id_categoria": id},
            { $set: req.body }
        );
        res.send(result)
    } catch (error){
        res.status(422).send(error)
    }
};
export const delCategoria = async (req, res)=>{
    try{
        const id = parseInt(req.params.id);
        let result = await categoria.deleteOne(
            { "id_categoria": id }
        );
        res.status(200).send(result)
    } catch (error){
        res.status(422).send(error)
    }
}

