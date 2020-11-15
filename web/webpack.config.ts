import * as webpack from 'webpack'
import * as path from 'path'

const config: webpack.Configuration = {
  mode: process?.env.NODE_ENV !== 'production' ? 'development' : 'production',
  entry: path.resolve(__dirname, 'src/index.tsx'),
  output: {
    path: path.resolve(__dirname, 'dist'),
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },

  // ensure no head gets messed up
  externals: ['react-helmet'],
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
