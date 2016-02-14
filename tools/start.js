import browserSync from 'browser-sync';
import webpack from 'webpack';
import hygienistMiddleware from 'hygienist-middleware';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import build from './build';
import { appConfig } from './webpack.config';

const options = {
  debug: !process.argv.includes('release'),
  verbose: process.argv.includes('verbose'),
  watch: true
};
const webpackConfig = appConfig(options);
const bundler = webpack(webpackConfig);

export default async () => {
  await build(options);

  browserSync({
    server: {
      baseDir: 'build',

      middleware: [
        hygienistMiddleware('build'),

        webpackDevMiddleware(bundler, {
          // IMPORTANT: dev middleware can't access config, so we should
          // provide publicPath by ourselves
          publicPath: webpackConfig.output.publicPath,

          // pretty colored output
          stats: webpackConfig.stats,

          // for other settings see
          // http://webpack.github.io/docs/webpack-dev-middleware.html
        }),

        // bundler should be the same as above
        webpackHotMiddleware(bundler),
      ],
    },

    // no need to watch '*.js' here, webpack will take care of it for us,
    // including full page reloads if HMR won't work
    files: [
      'build/**/*.css',
      'build/**/*.html',
    ],
  });
};
