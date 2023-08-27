import express from "express";
import { coneccion } from "../../BackEnd/db/atlas.js";

let db = await coneccion();
let email = db.collection("email");
export const getEmailById = async (req, res, next) => {
    try {
        const id = parseInt(req.params.id);
        let result = await email.aggregate([
            {
                $match: { "id_email": id } 
            },
            {
                $lookup: {
                    from: "trainners",
                    localField: "trainner_email",
                    foreignField: "id_trainner",
                    as: "emailTrainner"
                }
            },
            {
                $unwind: "$emailTrainner"
            },
            {
                $project: {
                    "_id": 0,
                    "codigoEmail": "$id_email",
                    "Email": "$email",
                    "emailTrainner": "$emailTrainner.nombre_trainner",
                }
            }
        ]).toArray();
        res.send(result); 

    } catch (error) {
        next(error);
    }
};
export const getEmailAll = (req, res, next)=>{
    return new Promise(async(resolve)=>{
        let result = await email.aggregate([
            {
                $lookup: {
                    from: "trainners",
                    localField: "trainner_email",
                    foreignField: "id_trainner",
                    as: "emailTrainner"
                }
            },
            {
                $unwind: "$emailTrainner"
            },
            {
                $project: {
                    "_id": 0,
                    "codigoEmail": "$id_email",
                    "Email": "$email",
                    "emailTrainner": "$emailTrainner.nombre_trainner",
                }
            }
        ]).toArray();
        res.send(result);
    }) 
};
export const postEmail = async(req, res)=>{
    try{
        console.log(req.body);
        let result = await email.insertOne(req.body);
        res.status(201).send(result);
    } catch (error){
        console.log(error);
        }
};
export const putEmail = async (req, res)=>{
    try{
        const id = parseInt(req.params.id);
        let result = await email.updateOne(
            { "id_email": id},
            { $set: req.body }
        );
        res.send(result)
    } catch (error){
        res.status(422).send(error)
    }
};
export const delEmail = async (req, res)=>{
    try{
        const id = parseInt(req.params.id);
        let result = await email.deleteOne(
            { "id_email": id }
        );
        res.status(200).send(result)
    } catch (error){
        res.status(422).send(error)
    }
}

