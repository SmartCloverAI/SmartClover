/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/services',
        destination: '/products',
        permanent: true
      },
      {
        source: '/gep',
        destination: '/gender-equality-plan',
        permanent: true
      }
    ];
  }
};

module.exports = nextConfig;
