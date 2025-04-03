/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverExternalPackages: ['@playwright/test', 'chrome-aws-lambda']
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
      };
    }
    return config;
  },
  api: {
    bodyParser: {
      sizeLimit: '10mb' // Aumenta o limite para 10MB
    }
  }
}

module.exports = nextConfig 