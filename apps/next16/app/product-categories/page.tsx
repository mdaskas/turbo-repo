import { getProductCategories } from "../data/get-categories";

export default async function ProductCategoriesPage() {
	const categories = await getProductCategories();

	return (
		<div>
			<h2>Product Categories</h2>
			{categories.map((category) => (
				<div
					key={category.id}
					className='border border-gray-500 m-2 p-2'>
					<span>{category.id} - </span>
					<span>{category.name}</span>
				</div>
			))}
		</div>
	);
}
