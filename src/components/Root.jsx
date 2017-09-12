import React from 'react';
import PropTypes from 'prop-types';
import {Provider} from 'react-redux';

import store from '../store';

import App from './App.jsx';

function Root() {
    return (
        <Provider store = {store}>
            <App />
        </Provider>
    )
}

export default Root;