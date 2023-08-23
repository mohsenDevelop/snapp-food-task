/** @type {import('next').NextConfig} */
const nextConfig = {
    // images: {
    //     domains: [
    //         'images.unsplash.com',
    //         'img.freepik.com',
    //         'im1.dineout.co.in',
    //         'www.links.hr',
    //         'media-cdn.bnn.in.th',
    //         'storage.yandexcloud.net',
    //         'cdn.pixabay.com'
    //     ]
    // },
    eslint: {
        dirs: ['src', 'src/*']
    },
    swcMinify: true,
    reactStrictMode: true,
};

module.exports = nextConfig;
