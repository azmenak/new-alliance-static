import React, { Component } from 'react';
import './Navigation.scss';
import Link from '../Link';
import _ from 'lodash';

export default class Navigation extends Component {
  render() {
    const navItems = [
      { href: '/', label: 'Home' },
      { href: '/about', label: 'About' },
      { href: '/projects', label: 'Projects' },
      { href: '/contractors', label: 'Contractors' }
    ];

    return (
      <ul className="navigation" role="menu">
        { _.map(navItems, item =>
          <li key={item.href}>
            <Link className="btn btn-link" to={item.href}><span>{ item.label }</span></Link>
          </li>
        ) }
        <li className="typeform-link">
          <a
            className="btn btn-primary"
            href="https://adamzmenak.typeform.com/to/H2CxU0"
            target="_blank"
          >Contact Us</a>
        </li>
      </ul>
    );
  }
}
