import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import {articles} from './fixtures';
 
import './App.scss';
import ArticleList from './components/ArticleList.jsx';

class App extends Component {
	static propTypes = {

	};

	render(){
		return (
			<MuiThemeProvider>
				<div className="app">
					<ArticleList articles={articles} />
				</div>
			</MuiThemeProvider>
		);
	}
};

export default App;