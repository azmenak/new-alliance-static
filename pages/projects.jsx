import React, { Component } from 'react';
import { Grid, Row, Col, PageHeader } from 'react-bootstrap';
import _ from 'lodash';

const projects = [{
  name: 'TTC York University Station (WALSH)',
  path: 'ttc-york-uni',
  count: 11,
  year: 2014,
  images: [{
    responsive: JSON.parse(require('image-webpack!resize-image?sizes[]=600w,sizes[]=300w!../images/projects/ttc/originals/1.jpg')),
    img: require('image-webpack!../images/projects/ttc/originals/1.jpg'),
    size: '300w,600w'
  }]
}, {
  name: 'King Road Underpass City of Hamilton',
  path: 'king-road',
  count: 7,
  year: 2013,
  images: [{
  }]
}];

export default class Projects extends Component {
  render() {
    return (
      <Grid className="body-component projects-page">
        <PageHeader className="headline">
          New Alliance Projects Gallery
        </PageHeader>

        <div className="past-projects">
          <h2>Past Projects</h2>
        </div>
      </Grid>
    );
  }
}
