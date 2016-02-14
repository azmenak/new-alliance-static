/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import task from './lib/task';
import clean from './clean';
import copy from './copy';
import bundle from './bundle';
import render from './render';
import _ from 'lodash';

export default function builder(options = {}) {
  _.defaults(options, {
    debug: !process.argv.includes('release'),
    verbose: process.argv.includes('verbose'),
    watch: false
  });

  return task(async function build() {
    await clean();
    await copy();
    const stats = await bundle(options);
    await render(options, stats);
  })();
}
