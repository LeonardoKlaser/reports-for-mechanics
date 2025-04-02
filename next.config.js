/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverExternalPackages: ['puppeteer-core', '@sparticuz/chromium']
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
  env: {
    PUPPETEER_SKIP_CHROMIUM_DOWNLOAD: 'true',
    PUPPETEER_EXECUTABLE_PATH: process.env.NODE_ENV === 'production' 
      ? '/tmp/chromium'
      : process.platform === 'win32'
        ? 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'
        : process.platform === 'linux'
          ? '/usr/bin/google-chrome'
          : '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
  }
}

module.exports = nextConfig 