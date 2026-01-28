import prisma from "./prisma";

async function main() {
	await prisma.product.deleteMany({});
	await prisma.productCategory.deleteMany({});
	await prisma.customer.deleteMany({});

	const createdCategories = [
		{ id: 1, code: "beef", name: "Beef" },
		{ id: 2, code: "pork", name: "Pork" },
		{ id: 3, code: "chicken", name: "Chicken" },
		{ id: 4, code: "fish", name: "Fish" },
	];

	const categories = await prisma.productCategory.createManyAndReturn({
		data: createdCategories,
	});

	await prisma.product.createMany({
		data: [
			{
				id: 100,
				code: "b100",
				description: "Beef Steak",
				price: 29.99,
				categoryId: categories[0]?.id ?? 1,
			},
			{
				id: 101,
				code: "p100",
				description: "Pork Chops",
				price: 24.99,
				categoryId: categories[1]?.id ?? 2,
			},
			{
				id: 102,
				code: "c100",
				description: "Chicken Breast",
				price: 19.99,
				categoryId: categories[2]?.id ?? 3,
			},
			{
				id: 103,
				code: "f100",
				description: "Salmon Fillet",
				price: 34.99,
				categoryId: categories[3]?.id ?? 4,
			},
		],
	});

	await prisma.customer.createMany({
		data: [
			{
				id: 100,
				code: "c100",
				name: "ABC Manufacturing",
				address1: "123 Meat St",
				city: "Carnivore City",
				state: "TX",
				zip: "75001",
				phone: "555-1234",
				email: "beef@example.com",
			},
			{
				id: 101,
				code: "c101",
				name: "Food Truck",
				address1: "456 Pork Ave",
				city: "Swine Town",
				state: "IA",
				zip: "50001",
				phone: "555-5678",
				email: "pork@example.com",
			},
			{
				id: 102,
				code: "c102",
				name: "Big Boy",
				address1: "789 Chicken Blvd",
				city: "Poultry Place",
				state: "GA",
				zip: "30001",
				phone: "555-8765",
				email: "chicken@example.com",
			},
			{
				id: 103,
				code: "c103",
				name: "Ernie's",
				address1: "321 Fish Rd",
				city: "Seafood City",
				state: "FL",
				zip: "33001",
				phone: "555-4321",
				email: "fish@example.com",
			},
		],
	});

	console.log("Database seeded successfully!");
}

main()
	.catch((e) => {
		console.error(e);
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
