/** @type {import('next').NextConfig} */
const remoteHosts = ['readymadeui.com', 'via.placeholder.com', 'res.cloudinary.com', 'images.unsplash.com'];

const nextConfig = {
  images: {
    remotePatterns: remoteHosts.map((hostname) => ({ protocol: 'https', hostname })),
  },
};

export default nextConfig;
