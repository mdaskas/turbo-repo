import Link from "next/link";
import { getProducts } from "../data/get-products";

export default async function ProductsListing() {
	const product = await getProducts();

	return (
		<div>
			<h2>Products Listing</h2>
			{product?.map((prod) => (
				<div key={prod.id} className='border border-gray-500 m-2 p-2'>
					<span className='ml-3'>{prod.id}</span>
					<span className='ml-3'>{prod.code}</span>
					<span className='ml-3'>{prod.description}</span>
					<Link href={`/products/${prod.id}`} className='ml-5'>
						View Details
					</Link>
				</div>
			))}
		</div>
	);
}
