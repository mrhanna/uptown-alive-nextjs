/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'picsum.photos',
                port: '',
            },
            {
                protocol: 'http',
                hostname: 'localhost',
                port: '1337',
            },
        ],
    },
}

module.exports = nextConfig;
