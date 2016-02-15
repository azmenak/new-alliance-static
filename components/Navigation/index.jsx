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
      { href: '/contractors', label: 'Contractors' },
      { href: '/contact', label: 'Contact' }
    ];

    return (
      <ul className="Navigation" role="menu">
        { _.map(navItems, item =>
          <li className="Navigation-item" key={item.href}>
            <Link to={item.href}><span>{ item.label }</span></Link>
          </li>
        ) }
      </ul>
    );
  }
}
