import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';

import './CommentsList.scss';

import Comment from './Comment.jsx';

export default class CommentsList extends Component{
    static defaultProps = {
        comments: []
    }
    state = {
        isOpen: false
    }
    render(){
        const {isOpen} = this.state;
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
                    onClick = {this.toggleOpen} 
                />
                <ul className='comments__list'>
                    {this.getComments()}
                </ul>
            </div>
        );
    }
    getComments() {
        if(!this.state.isOpen) return null;
        const {comments} = this.props;
        if (!comments.length) return <p>No comments yet</p>
        
        return (
            comments.map((item) => <li className='comment__item' key={item.id}><Comment user={item.user} text={item.text} /></li>)
        );
    }

    toggleOpen = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
}