import { Prisma } from "@prisma/client";
import { addPhrase } from "../repositories/addPhrase";

export const Phrase = async (phrase : Prisma.PhrasesCreateInput)=>{
    try{
        return await addPhrase(phrase)
    }catch(error){
        return false
    }
}