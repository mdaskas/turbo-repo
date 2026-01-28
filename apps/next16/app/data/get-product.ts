import "server-only";

import prisma from "@/lib/prisma";
import { requireUser } from "./require-user";

export async function getProductById(id: number) {
	"use cache";
	await requireUser();

	try {
		const products = await prisma.product.findUnique({ where: { id } });
		return products;
	} catch (error) {
		console.error("Error fetching products:", error);
		throw new Error("Failed to fetch products.");
	}
}
