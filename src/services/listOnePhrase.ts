
import { prisma } from "../libs/prisma"

export const listPhrase = async (id : number) =>{
return await prisma.phrases.findUnique({
    where: {
        id
    }
})
}