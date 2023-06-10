// 👇️ assumes you use Webpack 5
module.exports = {
    webpack5: true,
    webpack: config => {
      config.resolve.fallback = {
        crypto: false,
        stream: false,
      };
  
      return config;
    },
  };
  