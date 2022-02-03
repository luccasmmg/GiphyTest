/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    domains: ['previews.123rf.com', 'media0.giphy.com', 'media3.giphy.com', 'media2.giphy.com', 'media4.giphy.com', 'media5.giphy.com', 'media1.giphy.com', 'media6.giphy.com', 'media7.giphy.com']
  },
  eslint: {
    dirs: ['src'],
  },

  reactStrictMode: true,

  // Uncoment to add domain whitelist
  // images: {
  //   domains: [
  //     'res.cloudinary.com',
  //   ],
  // },

  // SVGR
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            typescript: true,
            icon: true,
          },
        },
      ],
    });

    return config;
  },
};
