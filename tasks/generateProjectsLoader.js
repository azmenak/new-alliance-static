import qs from 'qs';
import _ from 'lodash';

const projects = [];

const projectimages = _.map(projects, project => {
  return _.assign({}, project, { images: _.map(_.range(project.count), i => {
    const sizes = { sizes: ['300w', '600w'] };
    const sizesstring = qs.stringify(sizes, { arrayformat: 'brackets' });
    const path = `../images/projects/${project.path}/originals/${i}.jpg`;
    const responsive = `image-webpack!resize-image?${sizesstring}!${path}`;
    const img = `image-webpack!${path}`;
    return {
      index: i,
      responsive,
      img,
      size: sizes.sizes.join(',')
    }
  })})
});

export default generateJSfile() {
  // make things
}
