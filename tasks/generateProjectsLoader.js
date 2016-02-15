import _ from 'lodash';
import fs from 'fs-extra-promise';
import path from 'path';

export default function generateJSfile() {
  const sizes = ['300w', '600w'];
  const sizesString = _.map(sizes, s => `sizes[]=${s}`).join('&');
  const projectsDir = path.join(__dirname, '..', 'images', 'projects');
  const projectPaths = fs.readdirSync(projectsDir).filter(file => fs.statSync(path.join(projectsDir, file)).isDirectory());

  const projectimages = _.map(projectPaths, project => {
    const folder = path.join(projectsDir, project);
    const config = fs.readJSONSync(path.join(folder, 'config.json'));

    const images = fs.readdirSync(path.join(folder, 'web')).filter(file => /\.jpg$/i.test(file));
    return _.assign({}, config, { images: images.map(image => {
      const imagePath = `../images/projects/${project}/web/${image}`;
      const responsivePath = `image-webpack!resize-image?${sizesString}!${imagePath}`;
      const webpackImgPath = `image-webpack!${imagePath}`;
      return {
        responsivePath,
        webpackImgPath,
        imagePath,
      }
    })})
  });

  const staticFile = 'export default [\n' +
    projectimages.map(p => {
      return '{\n' +
        `  name: '${p.name}',\n` +
        `  year: ${p.year},\n` +
        '  images: [' +
        p.images.map(img => {
          return '{\n' +
            `    responsive: JSON.parse(require('${img.responsivePath}')),\n` +
            `    image: require('${img.webpackImgPath}'),\n` +
            `    path: '${img.imagePath}',\n` +
            `    sizes: '${sizes.join(",")}'\n`
          + '  }'
        }).join(', ') +
          ']\n'
      + '}'
    }).join(', ')
  + ']';

  fs.outputFileSync(path.join(__dirname, '..', 'lib', 'projectImages.js'), staticFile, 'utf8');
  console.log('Much success');
}
