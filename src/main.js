import React from 'react';
import {render} from 'react-dom';
import PropTypes from 'prop-types';
import { Router, Route, Link, Switch } from 'react-router-dom';
import history from './history';

import App from './App.jsx';

render(
  <App />,
  document.getElementById('mount-point')
);
