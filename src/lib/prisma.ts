import { PrismaClient } from "@/generated/prisma";

declare global {
	var prismaClientSingleton: PrismaClient | undefined;
}

const prismaClientSingleton = () => {
	return new PrismaClient({
		log: ["error", "warn"],
	});
};

const prisma = globalThis.prismaClientSingleton ?? prismaClientSingleton();
if (process.env.NODE_ENV !== "production") globalThis.prismaClientSingleton = prisma;

export default prisma;

