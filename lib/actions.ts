"use server"

import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/data";

export async function createBook(name: string) {
    const session = await getSession();
    if (!session?.user) return null;

    const book = await prisma.book.findFirst({
        where: { userId: session.user.id },
    });
    if (!book) return null;

    return prisma.book.create({
        data: {
            name,
            userId: session.user.id,
        }
    });
}

