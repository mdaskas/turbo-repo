// lib/prisma.ts (or wherever you prefer)
import { PrismaClient } from "../prisma/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

// 1. Instantiate PrismaClient
const prismaClientSingleton = () => {
	const connectionString = `${process.env.DATABASE_URL}`;
	const adapter = new PrismaPg({ connectionString });
	const prisma = new PrismaClient({ adapter });
	return prisma;
};

// 2. Declare a global variable for the client instance
// This is necessary to prevent hot-reloading from creating new instances in development environments (like Next.js)
declare global {
	var prisma: undefined | ReturnType<typeof prismaClientSingleton>;
}

// 3. Use the existing global instance if available, otherwise create a new one
export const prisma = globalThis.prisma ?? prismaClientSingleton();

// 4. In development, store the instance globally
if (process.env.NODE_ENV !== "production") {
	globalThis.prisma = prisma;
}

export default prisma;
