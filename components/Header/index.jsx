import './Header.scss';

import React, { Component } from 'react';
import Navigation from '../Navigation';
import { Grid } from 'react-bootstrap';

const logoResponsiveJSON = require('image-webpack!resize-image?sizes[]=600w,sizes[]=300w!../../images/new-alliance-logo.png');
const logoImg = require('image-webpack!../../images/new-alliance-logo.png');

export default class Header extends Component {
  render() {
    const logoResponsive = JSON.parse(logoResponsiveJSON);
    return (
      <header className="top-bar">
        <Grid>
          <img
            className="logo"
            sizes="300w,600w"
            src={logoImg}
            srcSet={logoResponsive.srcset}
          />
          <Navigation />
        </Grid>
      </header>
    )
  }
}
