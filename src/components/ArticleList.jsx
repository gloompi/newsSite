import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import './ArticleList.scss';
import accardeonWrap from '../decorators/accardeonWrap.jsx';

import Article from './Article/Article.jsx';

class ArticleList extends Component {
    static propTypes = {
        //from connect
        articles: PropTypes.array.isRequired,
        //from accardeon
        openItemId: PropTypes.string,
        toggleOpenItem: PropTypes.func.isRequired
    }

    render() {
        const { articles, openItemId, toggleOpenItem } = this.props;
        const articleElements = articles.map(article => (
            <li 
                className="article__item" 
                key={article.id}>

                <Article 
                    article = {article} 
                    isOpen = {article.id === openItemId} 
                    toggleOpen = {toggleOpenItem(article.id)} 
                />

            </li>
            )
        );

        return (
            <ul className="articles__list">
                {articleElements}
            </ul>
        )
    }
}

export default connect(({filters, articles}) => {
    const {selected, dateRange: {from, to}} = filters;

    const filteredArticles = articles.filter(article => {
        const published = Date.parse(article.id);
        return(!selected.length || selected.includes(article.id)) &&
            (!from || !to || (published > from && published < to))
    })

    return{
        articles: filteredArticles
    }
})(accardeonWrap(ArticleList));