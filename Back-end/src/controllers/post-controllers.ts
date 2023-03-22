import { Request, Response } from "express";
import { postPostDB } from "../repositories/post-repositories";



export async function postPost(req:Request, res:Response){

    try {
        
        await postPostDB(req.body)

        res.sendStatus(201)
    
    } catch (error) {

        console.log(error)
        res.sendStatus(500)
    }
}