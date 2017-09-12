import React from 'react';
import {render} from 'react-dom';
import PropTypes from 'prop-types';
import { Router, Route, Link, Switch } from 'react-router-dom';
import history from './history';

import store from './store';

import Root from './components/Root.jsx';

render(
  <Root />,
  document.getElementById('mount-point')
);
