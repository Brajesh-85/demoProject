/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["media.cnn.com"]
    },
    experimental: {
        appDir: true,
         serverComponentsExternalPackages: ["mongoose"]
    }
}

module.exports = nextConfig
