/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React from 'react';
import './Navigation.scss';
import Link from '../Link';

const navItems = [
  { href: '/', children: 'Home' },
  { href: '/about', children: 'About' }
];

function NavItem({ href, children }) {
  return (
    <li className="Navigation-item">
      <a className="Navigation-link" href={href} onClick={Link.handleClick}>{ children }</a>
    </li>
  )
}

function Navigation() {
  return (
    <ul className="Navigation" role="menu">
      { navItems.map(item => <NavItem item />) }
    </ul>
  );
}

export default Navigation;
