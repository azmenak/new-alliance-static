/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React, { PropTypes, Component } from 'react';
import './Layout.scss';
import Header from '../Header';

export default class Layout extends Component {

  static propTypes = {
    children: PropTypes.element.isRequired,
  }

  render() {
    return (
      <div className="Layout">
        <Header />
        <div className="body">
          { this.props.children }
        </div>
      </div>
    );
  }
}
