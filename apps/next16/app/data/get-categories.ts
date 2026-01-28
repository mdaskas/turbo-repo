import "server-only";

import prisma from "@/lib/prisma";
import { requireUser } from "./require-user";

export async function getProductCategories() {
	"use cache";
	await requireUser();

	try {
		const categories = await prisma.productCategory.findMany();
		return categories;
	} catch (error) {
		console.error("Error fetching product categories:", error);
		throw new Error("Failed to fetch product categories.");
	}
}
