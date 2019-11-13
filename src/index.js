import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bulma/css/bulma.css';
import { App } from './App';
import { MoviePage } from './components/MoviePage';

ReactDOM.render(<App />, document.getElementById('root'));
