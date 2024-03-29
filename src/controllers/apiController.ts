import { Request, Response } from "express";
import { prisma } from "../libs/prisma";
import { Phrase } from "../services/createPhrases";

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
    let id = parseInt(req.params.id as string)
    let phrase = await prisma.phrases.findUnique({
        where: {
            id
        }
    })
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
    let newPhrase = await prisma.phrases.update({
        where:{id},
        data : {author,txt}
    })
    res.json(newPhrase)
    }catch(error){
        res.json({error : 'Falha ao atualizar frase'})
    }
}

export const deletePhrase = async(req: Request, res: Response)=>{
    try{
        let id = parseInt(req.params.id as string)
        const delPhrase = await prisma.phrases.delete({
            where : {id}
        })
        res.json(delPhrase)
    }catch(error){
        res.json({error : "Falha ao deletar frase"})
    }
}