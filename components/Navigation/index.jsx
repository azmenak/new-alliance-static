import React, { Component } from 'react';
import './Navigation.scss';
import Link from '../Link';
import _ from 'lodash';
import Typeform from '../../pages/contact/Typeform';

export default class Navigation extends Component {
  render() {
    const navItems = [
      { href: '/', label: 'Home' },
      { href: '/about', label: 'About' },
      { href: '/projects', label: 'Projects' },
      { href: '/contractors', label: 'Contractors' }
    ];

    return (
      <ul className="Navigation" role="menu">
        { _.map(navItems, item =>
          <li className="Navigation-item" key={item.href}>
            <Link to={item.href}><span>{ item.label }</span></Link>
          </li>
        ) }
        <li className="typeform-link">
          <Typeform />
        </li>
      </ul>
    );
  }
}
