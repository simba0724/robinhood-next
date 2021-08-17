module.exports = {
  async rewrites() {
    return [
      {
        source: '/upload-artwork',
        destination: '/mint',
      },
    ];
  },
  webpack: (config, {isServer}) => {
    config.module.rules.push({
      test: /\.(graphql|gql)$/,
      exclude: /node_modules/,
      loader: 'graphql-tag/loader',
    });
    if (!isServer) {
      config.node = {
        fs: 'empty',
      };
    }
    return config;
  },
  webpackDevMiddleware: config => {
    return config;
  },
  publicRuntimeConfig: {
    GRAPHQL_ENDPOINT: process.env.GRAPHQL_ENDPOINT,
    MARKET: process.env.MARKET,
    MEDIA: process.env.MEDIA,
    RBH: process.env.RBH,
    FLEEK_API_KEY: process.env.FLEEK_API_KEY,
    FLEEK_API_SECRET: process.env.FLEEK_API_SECRET,
    API_ENDPOINT: process.env.API_ENDPOINT,
  },
};
