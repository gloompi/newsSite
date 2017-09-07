import React from 'react';
import PropTypes from 'prop-types';

export default function Comment(props){
    return (
        <div className='comment__info'>
            <h5 className="comment__username">{props.user}</h5>
            <section>{props.text}</section>
        </div>
    );
}

Comment.propTypes = {
    comment: PropTypes.shape({
        user: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
    })
}