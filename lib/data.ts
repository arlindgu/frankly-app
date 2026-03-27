import  { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export async function getSession() {
    const session = await auth.api.getSession({
        headers: await headers()
    });
    return session;
}

export async function getBooks() {
    const session = await getSession();
    if (!session?.user) return null;

    return prisma.book.findMany({
        where: { userId: session.user.id },
    });
}

export async function getCards() {
    const session = await getSession();
    if (!session?.user) return null;

    return prisma.card.findMany({
        where: { book: { userId: session.user.id } },
    });
}