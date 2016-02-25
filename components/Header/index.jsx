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
          <div className="cta-call-us clearfix">
            <h4>Get a free consultation</h4>
            <span>call us <span className="phone-number">(905) 637-8883</span></span>
          </div>
          <Navigation />
        </Grid>
      </header>
    )
  }
}
