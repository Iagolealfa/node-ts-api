import { prisma } from "../libs/prisma"

export const  getRandomPhrase = async () =>{
    const count = await prisma.phrases.count()
    const randomIndex = Math.floor(Math.random() * count)
    return await prisma.phrases.findFirst({
        skip: randomIndex
    })
}