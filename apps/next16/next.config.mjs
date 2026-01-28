/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["/ui"],
  cacheComponents: true,
  devIndicators: {
    position: 'bottom-right',
  },
}

export default nextConfig
