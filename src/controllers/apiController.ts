import { Request, Response } from "express";
import { prisma } from "../libs/prisma";
import { Phrase } from "../services/createPhrases";
import { listPhrase } from "../services/listPhrase";
import { upPhrase } from "../services/updatePhrase";
import { delPhrase } from "../services/delPhrase";

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
    res.json(phrase)
    
}

export const createPhrase = async(req: Request, res: Response) =>{
    let {author, txt} = req.body
    const newPhrase = await Phrase({author,txt})
    if(newPhrase){
        res.json(newPhrase)
    }else{
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