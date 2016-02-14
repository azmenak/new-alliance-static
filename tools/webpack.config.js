import path from 'path';
import webpack from 'webpack';
import _ from 'lodash';
import AssetsPlugin from 'assets-webpack-plugin';

const autoprefixerBrowsers = [
  'Android 2.3',
  'Android >= 4',
  'Chrome >= 35',
  'Firefox >= 31',
  'Explorer >= 9',
  'iOS >= 7',
  'Opera >= 12',
  'Safari >= 7.1',
];

const jsLoader = {
  test: /\.jsx?$/,
  include: [
    path.resolve(__dirname, '../components'),
    path.resolve(__dirname, '../core'),
    path.resolve(__dirname, '../pages'),
    path.resolve(__dirname, '../app.js'),
    path.resolve(__dirname, '../config.js'),
  ],
  loader: 'babel-loader',
};

export function baseConfig({ debug, verbose, watch }) {
  return {
    output: {
      path: path.join(__dirname, '../build'),
      publicPath: '/',
      sourcePrefix: '  '
    },
    cache: false,
    debug,
    stats: {
      colors: true,
      reasons: debug,
      hash: verbose,
      version: verbose,
      timings: true,
      chunks: verbose,
      chunkModules: verbose,
      cached: verbose,
      cachedAssets: verbose,
    },
    plugins: [
      new webpack.optimize.OccurenceOrderPlugin(),
      new AssetsPlugin({path: path.join(__dirname, '../build')}),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': debug ? '"development"' : '"production"',
        '__DEV__': debug,
      }),
    ],
    module: {
      loaders: [
        {
          test: /[\\\/]app\.js$/,
          loader: path.join(__dirname, './lib/routes-loader.js'),
        }, {
          test: /\.json$/,
          loader: 'json-loader',
        }, {
          test: /\.txt$/,
          loader: 'raw-loader',
        }, {
          test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
          loader: 'url-loader?limit=10000',
        }, {
          test: /\.(eot|ttf|wav|mp3)$/,
          loader: 'file-loader',
        },
      ],
    },
    postcss: function plugins(bundler) {
      return [
        require('postcss-import')({ addDependencyTo: bundler }),
        require('precss')(),
        require('autoprefixer')({
          browsers: autoprefixerBrowsers,
        }),
      ];
    },
    resolve: {
      extensions: ['', '.js', '.jsx', '.json']
    }
  };
}

// Configuration for the client-side bundle
export function appConfig(options) {
  const { debug, watch, verbose } = options;
  const config = baseConfig(options);

  const devOptions = watch ? {
    devServer: {
      contentBase: './build'
    }
  } : null;

  return _.merge({}, baseConfig(options), {
    watch,
    debug,

    entry: _.compact([
      watch ? 'webpack-hot-middleware/client' : null,
      './app.js'
    ]),

    output: debug ? {
      filename: 'app.js',
    } : {
      filename: 'app.[hash].js',
      chunkFilename: '[id].app.[hash].js'
    },
    // http://webpack.github.io/docs/configuration.html#devtool
    devtool: debug ? 'cheap-module-eval-source-map' : false,
    plugins: [
      ...config.plugins,
      ...(debug ? [] : [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({
          compress: {
            warnings: verbose,
          },
        }),
        new webpack.optimize.AggressiveMergingPlugin()
      ]),
      ...(watch ? [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
      ] : []),
    ],
    module: {
      loaders: [
        watch ? _.assign({}, jsLoader, {
          query: {
            // Wraps all React components into arbitrary transforms
            // https://github.com/gaearon/babel-plugin-react-transform
            "plugins": [
              ["react-transform", {
                "transforms": [
                  {
                    "transform": "react-transform-hmr",
                    "imports": ["react"],
                    "locals": ["module"]
                  }
                ]
              }]
            ]
          },
        }) : jsLoader,
        ...config.module.loaders,
        {
          test: /\.scss$/,
          loaders: ['style-loader', 'css-loader', 'postcss-loader']
        }
      ]
    }
  });
}

export function pagesConfig(options) {
  const config = baseConfig(options);
  return _.merge({}, config, {
    entry: {
      server: './app.js'
    },
    output: {
      filename: 'app.node.js',
      libraryTarget: 'commonjs2',
    },
    target: 'node',
    node: {
      console: false,
      global: false,
      process: false,
      Buffer: false,
      __filename: false,
      __dirname: false,
    },
    externals: /^[a-z][a-z\.\-\/0-9]*$/i,
    plugins: config.plugins.concat([
      new webpack.optimize.LimitChunkCountPlugin({ maxChunks: 6 }),
    ]),
    module: {
      loaders: [
        jsLoader,
        ...config.module.loaders,
        {
          test: /\.scss$/,
          loaders: ['css-loader', 'postcss-loader'],
        },
      ],
    }
  })
}
