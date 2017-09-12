import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
 
import './App.scss';
import 'react-select/dist/react-select.css';

import ArticleList from './ArticleList.jsx';
import Counter from './Counter.jsx';
import Filters from './Filters/Filters.jsx';

class App extends Component {
	static propTypes = {

	};

	render(){
		return (
			<MuiThemeProvider>
				<div className="app">
					<Counter />
					<Filters />
					<ArticleList />
				</div>
			</MuiThemeProvider>
		);
	}
};

export default App;