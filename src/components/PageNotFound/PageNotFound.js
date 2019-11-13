import React from 'react';
import './PageNotFound.scss';
import { Link } from 'react-router-dom';

export const PageNotFound = () => (
  <div className="hero is-fullheight is-warning">
    <div className="hero-body">
      <div className="container has-text-centered">
        <h1 className="title">
          Oops! Page not found
        </h1>

        <h2 className="subtitle">
          <Link to="/">
            Go to Home
          </Link>
        </h2>
      </div>
    </div>
  </div>
);
