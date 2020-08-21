const path = require('path');

module.exports = (env, argv) => {
  const development = argv.mode === 'development';

  const baseConfig = {
    entry: './src/twig.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'twig.min.js',
      // ライブラリの公開方法、今回は widnow からアクセスしたいため、'window'を指定
      // src/twig.js は twig と Twig を export しているため、window.twig と window.Twig でアクセスできるようになる
      libraryTarget: 'window',
    },
  };

  if (!development) {
    return baseConfig;
  }

  return Object.assign(baseConfig, {
    devServer: {
      port: 9000,
      contentBase: path.resolve(__dirname, 'dist'),
    },
  });
};
