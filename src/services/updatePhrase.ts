import { prisma } from "../libs/prisma"


export const upPhrase = async (id : number , author : string, txt : string)=>{
    return await prisma.phrases.update({
    where:{id},
    data : {author,txt} 
})}