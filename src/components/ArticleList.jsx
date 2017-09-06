import React from 'react';

import './ArticleList.scss';

import Article from './Article.jsx';
import CommentsList from './CommentsList.jsx';
import {articles} from '../fixtures';

export default function ArticleList(props) {
    const articleElements = articles.map((item) => {
        return <li  className="article__item" key={item.id}>
            <Article article={item}>
                <CommentsList comments={item.comments} />
            </Article>
        </li>
    });
    return (
        <ul className="articles__list">
            {articleElements}
        </ul>
    )
}