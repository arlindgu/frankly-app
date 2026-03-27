import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { PrismaClient } from "@/app/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const prisma = new PrismaClient({
    adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
})
export const auth = betterAuth({
    emailAndPassword: { enabled: true },
    database: prismaAdapter(prisma, {
        provider: "postgresql",
    }),
    databaseHooks: {
        user: {
            create: {
                after: async (user) => {
                    const book = await prisma.book.create({
                        data: {
                            name: "Mein Haushaltsbuch",
                            userId: user.id,
                            cards: {
                                create: [
                                    {
                                        name: "Bargeld",
                                        amount: 0,
                                        incomes: {
                                            create: [
                                                { name: "Startguthaben", amount: 0, category: "Sonstiges" }
                                            ]
                                        }
                                    },
                                    {
                                        name: "Bank",
                                        amount: 0,
                                    },
                                    {
                                        name: "Sonstiges",
                                        amount: 0,
                                    }
                                ]
                            }
                        }
                    });
                }
            }
        }
    }
});