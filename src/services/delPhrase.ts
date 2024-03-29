import { prisma } from "../libs/prisma"

export const delPhrase = async(id:number)=>{
    return await prisma.phrases.delete({
        where : {id}
    })
}