import React from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';
import {commentSelectorFactory} from '../selectors';

function Comment(props){
    const { comment } = props;
    return (
        <div className='comment__info'>
            <h5 className="comment__username">{comment.user}</h5>
            <section>{comment.text}</section>
        </div>
    );
}

Comment.propTypes = {
    id: PropTypes.string.isRequired,
    //from connect
    comment: PropTypes.shape({
        user: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
    })
}

const mapStateToProps = () => {
    const commentSelector = commentSelectorFactory();
    return (state, ownProps) => {
        return {
            comment: commentSelector(state, ownProps)
        }
    }
}

export default connect(mapStateToProps)(Comment);