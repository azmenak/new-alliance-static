import './projects/projects.scss';

import React, { Component } from 'react';
import { Grid, Row, Col, PageHeader } from 'react-bootstrap';
import _ from 'lodash';

import projectImages from '../lib/projectImages';

export default class Projects extends Component {
  render() {
    return (
      <Grid className="body-component projects-page">
        <PageHeader className="headline">
          New Alliance Projects Gallery
        </PageHeader>

        <div className="past-projects">
          <h2>Past Projects</h2>

          {_.map(projectImages, project =>
            <div className="project" key={project.name}>
              <h3>
                <div className="bg-text">
                  { poroject.name } <small className="year">({ project.year })</small>
                </div>
              </h3>
              <div className='img-col'>
              {_.map(project.images, image =>
                <img
                  className="max-width m-b-1"
                  sizes={image.sizes}
                  src={image.image}
                  srcSet={image.responsive.srcset}
                />
              )}
            </div>
            </div>
          )}
        </div>
      </Grid>
    );
  }
}
