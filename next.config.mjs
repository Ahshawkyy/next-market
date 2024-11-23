/** @type {import('next').NextConfig} */
const nextConfig = {};

export const images = {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'res.cloudinary.com',
      port: '',
      pathname: '/dn2fdxtad/image/upload/**',
    },
  ],
};

