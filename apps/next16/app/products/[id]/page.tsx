import { getProductById } from "../../data/get-product";

export default async function ProductDetail({
	params,
}: {
	params: { id: string };
}) {
	const { id } = await params;
	const product = await getProductById(Number(id));

	return (
		<div>
			<h2>Product Detail</h2>
			{product ? (
				<div
					style={{
						border: "1px solid gray",
						margin: "10px",
						padding: "10px",
					}}>
					<p>
						<strong>ID:</strong> {product.id}
					</p>
					<p>
						<strong>Code:</strong> {product.code}
					</p>
					<p>
						<strong>Description:</strong> {product.description}
					</p>
				</div>
			) : (
				<p>Product not found.</p>
			)}
		</div>
	);
}
