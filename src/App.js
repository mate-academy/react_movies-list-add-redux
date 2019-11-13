import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { MoviePage } from './components/MoviePage';
import { HomePage } from './components/HomePage';
import { PageNotFound } from './components/PageNotFound';

export const App = () => (
  <Router basename={process.env.PUBLIC_URL}>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/movies/:id" component={MoviePage} />
      <Route path="/404" component={PageNotFound} />
      <Route path="*" component={PageNotFound} />
    </Switch>
  </Router>
);
