import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
	const baseUrl = "webdev.com";

	return {
		rules: [
			{
				userAgent: "*",
				allow: "/",
				disallow: ["/admin", "/login"],
			},
			{
				userAgent: "Googlebot",
				allow: "/",
				disallow: ["/private"],
			},
		],
		sitemap: `${baseUrl}/sitemap.xml`,
	};
}
