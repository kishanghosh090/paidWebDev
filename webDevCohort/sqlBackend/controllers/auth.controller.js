import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export const register = async (req, res) => {
    await prisma.user.findUnique({
        where: { email }
    })
}