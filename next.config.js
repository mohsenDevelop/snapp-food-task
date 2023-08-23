/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            'cdn.snappfood.ir',
        ]
    },
    eslint: {
        dirs: ['src', 'src/*']
    },
    swcMinify: true,
    reactStrictMode: true,
};

module.exports = nextConfig;
