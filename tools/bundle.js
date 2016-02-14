import webpack from 'webpack';
import task from './lib/task';
import _ from 'lodash';
import { appConfig, pagesConfig } from './webpack.config';

export default function bundleMaker(options) {
  return task(function bundle() {
    return new Promise((resolve, reject) => {
      const webpackConfig = [
        appConfig(options),
        pagesConfig(_.assign({}, options, { watch: false }))
      ];

      const bundler = webpack(webpackConfig);
      const run = (err, stats) => {
        if (err) {
          reject(err);
        } else {
          console.log(stats.toString(webpackConfig[0].stats));
          resolve(stats);
        }
      };
      bundler.run(run);
    });
  })();
}
