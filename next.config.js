const path = require('path')

const FileLoader = {
  loader: 'file-loader',
  options: {
    publicPath: '/_next/static',
    outputPath: 'static',
  },
}

module.exports = {
  target: 'serverless',

  sassOptions: {
    includePaths: [path.join(__dirname, 'src/styles')],
  },

  webpack(config) {
    config.node.fs = 'empty'

    config.module.rules.push(
      {
        test: /\.svg$/,
        issuer: {
          test: /\.(js|ts)x?$/,
        },
        use: ['@svgr/webpack', FileLoader],
      },
      // images
      {
        test: /\.(png|jpe?g|gif)$/,
        use: [FileLoader],
      }
    )

    return config
  },
}
