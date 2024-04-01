import { Request, Response } from "express";
import { prisma } from "../libs/prisma";
import { Prisma } from "@prisma/client";
import { Phrase } from "../services/createPhrases";
import { listPhrase } from "../services/listOnePhrase";
import { upPhrase } from "../services/updatePhrase";
import { delPhrase } from "../services/delPhrase";
import { getRandomPhrase } from "../services/randomPhrase";

export const ping = (req : Request, res : Response) =>{
    res.json({pong : true})
}

export const nRand = (req : Request,res: Response) =>{
    let nRand : number = Math.floor(Math.random()*10)
    res.json({number : nRand})
}

export const name = (req : Request ,res : Response)=>{
    let nome : String = req.params.nome
    res.json({nome})
}

export const listPhrases = async(req : Request ,res : Response)=>{
    let phrases = await prisma.phrases.findMany()
    res.json(phrases)
}

export const listOnePhrase = async(req : Request ,res : Response)=>{
    
    let phrase = await listPhrase(parseInt(req.params.id as string))
    if(phrase){
        res.json(phrase)
    }else{
        res.json({error: "Frase não encontrada."})
    }
    
}

export const createPhrase = async(req: Request, res: Response) =>{
    let {author, txt} = req.body
    const newPhrase = await Phrase({author,txt})
    if(newPhrase){
        res.status(201)
        res.json(newPhrase)
    }else{
        res.status(201)
        res.json({error : 'Falha em adicionar frase'})
    }
}

export const updatePhrase = async(req: Request, res: Response)=>{
    try{
    let id = parseInt(req.params.id as string)
    let {author, txt} = req.body
    let newPhrase = await upPhrase(id,author,txt)
    res.json(newPhrase)
    }catch(error){
        res.json({error : 'Falha ao atualizar frase'})
    }
}

export const deletePhrase = async(req: Request, res: Response)=>{
    try{
        let id = parseInt(req.params.id as string)
        const Phrase = await delPhrase(id)
        res.json(Phrase)
    }catch(error){
        res.json({error : "Falha ao deletar frase"})
    }
}

export const randomPhrase = async(req:Request, res: Response) =>{
    let phrase = await getRandomPhrase()
    if(phrase){
        res.json(phrase)
    }else{
        res.json({error: 'Falha ao pegar frase aleatória'})
    }
}