import React, {Component} from 'react';

import './ArticleList.scss';

import Article from './Article.jsx';

export default class ArticleList extends Component {
    state = {
        openArticleId: null
    }

    render() {
        const articleElements = this.props.articles.map(article => <li className="article__item" key={article.id}>
            <Article 
                article = {article} 
                isOpen = {article.id === this.state.openArticleId} 
                toggleOpen = {this.toggleOpenArticle(article.id)} 
            />
        </li>);

        return (
            <ul className="articles__list">
                {articleElements}
            </ul>
        )
    }

    toggleOpenArticle = openArticleId => ev => {
        this.setState({ openArticleId })
    } 
}