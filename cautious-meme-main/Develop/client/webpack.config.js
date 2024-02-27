const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');

// TODO: Add and configure workbox plugins for a service worker and manifest file.
// TODO: Add CSS loaders and babel to webpack.


module.exports = {
  // Other webpack config...
  plugins: [
    // Other plugins...
    new InjectManifest({
      // These are some common options, and not all are required.
      // Consult the docs for more info.
      exclude: [/.../, '...'],
      maximumFileSizeToCacheInBytes: ...,
      swSrc: '...',
    }),
  ],
};
module.exports = () => {
  return {
    mode: 'development',
    entry: {
      main: './src/js/index.js',
      install: './src/js/install.js'
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
      
    ],

    module: {
      rules: [
        
      ],
    },
  };
};
