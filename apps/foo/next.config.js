/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    experimental: {
        externalDir: true //< for workspaces
    }
};

module.exports = nextConfig;
