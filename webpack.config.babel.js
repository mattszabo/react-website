var debug = process.env.NODE_ENV !== "prod";
// run following for prod: $ NODE_ENV="prod" webpack
import webpack from 'webpack';
import path from 'path';

let APP_DIR = path.resolve(__dirname, 'app');
let BUILD_DIR = path.resolve(__dirname, 'dist');

module.exports = {
  context: __dirname,
  devtool: debug ? "inline-sourcemap" : null,
  entry: APP_DIR + "/app.jsx",
  output: {
    path: BUILD_DIR,
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        // tell webpack to use jsx-loader for all *.jsx files
        test: /\.jsx?/,
        include: APP_DIR,
        loader: 'babel'
      }
    ]
  },
  externals: {
    // don't bundle the 'react' npm package with bundle.js
    // instead get it from the global 'React' variable
    'react': 'React',
    'react-dom': 'ReactDOM',
    'jquery': 'jQuery'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      mangle: false, sourcemap: false
    }),
    new webpack.optimize.UglifyJsPlugin(),
  ],
};
