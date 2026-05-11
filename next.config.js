/** @type {import('next').NextConfig} */
const homepageLinkHeader = [
  '</.well-known/api-catalog>; rel="api-catalog"; type="application/linkset+json"',
  '</openapi.json>; rel="service-desc"; type="application/openapi+json"',
  '</docs/api>; rel="service-doc"; type="text/html"'
].join(', ');

const cacheablePublicHeaders = [
  {
    key: 'Access-Control-Allow-Origin',
    value: '*'
  },
  {
    key: 'Cache-Control',
    value: 'public, max-age=3600, stale-while-revalidate=86400'
  }
];

const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/gep',
        destination: '/gender-equality-plan',
        permanent: true
      }
    ];
  },
  async rewrites() {
    return [];
  },
  async headers() {
    return [
      {
        source: '/',
        headers: [
          {
            key: 'Link',
            value: homepageLinkHeader
          }
        ]
      },
      {
        source: '/openapi.json',
        headers: [
          ...cacheablePublicHeaders,
          {
            key: 'Content-Type',
            value: 'application/openapi+json; charset=utf-8'
          }
        ]
      },
      {
        source: '/.well-known/api-catalog',
        headers: [
          ...cacheablePublicHeaders,
          {
            key: 'Content-Type',
            value: 'application/linkset+json; profile="https://www.rfc-editor.org/info/rfc9727"; charset=utf-8'
          }
        ]
      }
    ];
  }
};

module.exports = nextConfig;
