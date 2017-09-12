import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Select from 'react-select';

import {changeSelection} from '../../AC';

class SelectArea extends Component{
    static propTypes = {
        articles: PropTypes.array.isRequired
    }

    handleChange = selected => this.props.changeSelection(selected.map(option => option.value));

    render(){
        const {articles, selected} = this.props;
        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }));
        return(
            <Select 
                options = {options} 
                value = {selected} 
                onChange = {this.handleChange} 
                multi
            />
        )
    }
}

export default connect(state => ({
    selected: state.filters.selected,
    articles: state.articles
}), {changeSelection})(SelectArea);