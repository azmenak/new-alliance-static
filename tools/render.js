import glob from 'glob';
import { join, dirname } from 'path';
import React from 'react';
import ReactDOM from 'react-dom/server';
import Html from '../components/Html';
import task from './lib/task';
import fs from './lib/fs';

function getPages() {
  return new Promise((resolve, reject) => {
    glob('**/*.{js,jsx}', { cwd: join(__dirname, '../pages') }, (err, files) => {
      if (err) {
        reject(err);
      } else {
        const result = files.map(file => {
          let path = '/' + file.substr(0, file.lastIndexOf('.'));
          if (path === '/index') {
            path = '/';
          } else if (path.endsWith('/index')) {
            path = path.substr(0, path.lastIndexOf('/index'));
          }
          return { path, file };
        });
        resolve(result);
      }
    });
  });
}

export default function renderTask(options, multiStats) {
  const { debug } = options;
  //const stats = multiStats.stats[1];
  const stats = multiStats.stats[0].toJson().assetsByChunkName;

  async function renderPage(page, component) {
    const data = {
      body: ReactDOM.renderToString(component),
      stats
    };
    const file = join(__dirname, '../build', page.file.substr(0, page.file.lastIndexOf('.')) + '.html');
    const html = '<!doctype html>\n' + ReactDOM.renderToStaticMarkup(
      <Html debug={debug} {...data} />
    );
    await fs.mkdir(dirname(file));
    await fs.writeFile(file, html);
  }

  return task(async function render() {
    const pages = await getPages();
    const { route } = require('../build/app.node').default;
    for (const page of pages) {
      await route(page.path, renderPage.bind(undefined, page));
    }
  })();
}
