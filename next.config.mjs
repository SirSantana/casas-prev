/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        domains:['azurequarks.blob.core.windows.net']
    },
    webpack: (config) => {
        config.externals = [...config.externals, { canvas: 'canvas' }];
        return config;
      },
};

export default nextConfig;
