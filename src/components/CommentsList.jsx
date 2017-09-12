import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import PropTypes from 'prop-types';

import './CommentsList.scss';

import toggleOpen from '../decorators/toggleOpen.jsx';
import Comment from './Comment.jsx';
import AddComment from './AddComment.jsx';

function CommentsList({comments = [], isOpen, toggleOpen}){
    const style = {
        marginLeft: 'auto'
    }
    return (
        <div className="comments__container">
            <RaisedButton 
                className="comment__btn" 
                style={style}
                label={!isOpen ? 'show comments' : 'hide comments'} 
                secondary={true} 
                onClick = {toggleOpen} 
            />
            <ul className='comments__list'>
                {getComments({comments, isOpen})}
            </ul>
            <AddComment />
        </div>
    );
}

CommentsList.propTypes = {
    comments: PropTypes.array,
    isOpen: PropTypes.bool,
    toggleOpen: PropTypes.func.isRequired
}

function getComments({comments, isOpen}) {
    if(!isOpen) return null;
    if (!comments.length) return <p>No comments yet</p>
    
    return (
        comments.map((item) => (
            <li className='comment__item' 
                key={item.id}><Comment 
                user={item.user} 
                text={item.text} />
            </li>
            )
        )
    );
}

export default toggleOpen(CommentsList);