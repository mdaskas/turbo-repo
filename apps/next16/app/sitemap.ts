import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
	const baseUrl = "webdev.com";

	return [
		{
			url: `${baseUrl}/`,
			changeFrequency: "daily",
			lastModified: new Date(),
			priority: 1.0,
		},
		{
			url: `${baseUrl}/about`,
			changeFrequency: "monthly",
			lastModified: new Date(),
			priority: 0.7,
		},
	];
}
