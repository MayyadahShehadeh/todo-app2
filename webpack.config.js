module.exports = {
  resolve: {
      fallback: {
          crypto: require.resolve('crypto-browserify'),
          stream: require.resolve("stream-browserify"),
          "path": require.resolve("path-browserify"),
          util: require.resolve("util/")
      }
  }
}