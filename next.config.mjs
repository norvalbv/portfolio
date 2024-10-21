/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ['@smithy/util-retry'],
  },
};

export default nextConfig;