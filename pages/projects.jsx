import React, { Component } from 'react';
import { Grid, Row, Col, PageHeader } from 'react-bootstrap';
import _ from 'lodash';

import projectImages from '../lib/projectImages';

export default class Projects extends Component {
  render() {
    console.log(projectImages);
    return (
      <Grid className="body-component projects-page">
        <PageHeader className="headline">
          New Alliance Projects Gallery
        </PageHeader>

        <div className="past-projects">
          <h2>Past Projects</h2>

          {_.map(projectImages, project =>
            <div className="project" key={project.name}>
              <h3>{ project.name }</h3>
              <Row>
                {_.map(project.images, image =>
                  <Col xs={12} md={6}>
                    <img
                      src={image.image}
                      srcSet={image.responsive.srcset}
                      sizes={image.sizes}
                      className="max-width"
                    />
                  </Col>
                )}
              </Row>
            </div>
          )}
        </div>
      </Grid>
    );
  }
}
