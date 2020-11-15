import * as webpack from 'webpack'
import * as path from 'path'

const config: webpack.Configuration = {
  mode: process?.env.NODE_ENV !== 'production' ? 'development' : 'production',
  entry: path.resolve(__dirname, 'src/index.tsx'),
  output: {
    path: path.resolve(__dirname, 'dist/assets'),
    chunkFilename: '[id].js',
    filename: (data) => (data?.chunk?.name === 'main' ? '0.js' : '[id].js'),
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },

  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
}

export default config
