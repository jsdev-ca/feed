import React from 'react';
import { Link } from 'react-router-dom';

import routes from './routes-config';

export default function () {
  return (
    <header>
      <nav className="navbar">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            App
          </a>
          <ul
            className="navbar-nav flex-row justify-content-between"
            style={{ width: '10rem' }}
          >
            {routes.map(({ name, path }) => (
              <li className="nav-item" key={name}>
                <Link
                  aria-label={`Navigate to our ${name} page.`}
                  className="nav-link"
                  to={path}
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
