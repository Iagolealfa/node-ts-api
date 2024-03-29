import { prisma } from "../libs/prisma";
import { Prisma } from "@prisma/client";

export const addPhrase = async (phrase : Prisma.PhrasesCreateInput)=>{
    try{
        return await prisma.phrases.create({
            data : phrase
        })
    }catch(error){
        return false
    }
}