import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

import CommentsList from './CommentsList.jsx';

export default class Article extends Component {
  static propTypes = {
    article: PropTypes.shape({
      id:PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      text: PropTypes.string
    }).isRequired
  }

  render() {
    const {article, isOpen, toggleOpen} = this.props;
    const style = {
      backgroundColor: '#008577',
      width: '100%',
      padding: 25,
      textAlign: 'center',
      display: 'inline-block',
    };
    return (
      <Paper style={style} zDepth={3}>
        <h3 className="article__title">{article.title}</h3>
        <RaisedButton 
          className="article__btn"
          label={!isOpen ? 'open' : 'close'} 
          primary={true} 
          onClick = {toggleOpen} 
        />
        {this.getBody()}
        <div className="comment__wrap"><CommentsList comments={article.comments} /></div>
      </Paper>
    )
  }

  getBody() {
    const {article, isOpen} = this.props;
    if(!isOpen) return null;
    return <section className="article__text">{article.text}</section>;
  }
}