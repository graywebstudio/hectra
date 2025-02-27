/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Enables static export
  async redirects() {
    return [
      {
        source: "/",
        destination: "/home",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
