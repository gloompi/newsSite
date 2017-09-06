import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
 
import './App.scss';
import ArticleList from './components/ArticleList.jsx';

class App extends Component {
	render(){
		return (
			<MuiThemeProvider>
				<div className="app">
					<ArticleList />
				</div>
			</MuiThemeProvider>
		);
	}
};

export default App;