import React, {Component, PureComponent} from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import {connect} from 'react-redux';

import {deleteArticle} from '../../AC';

import CommentsList from '../CommentsList.jsx';

class Article extends PureComponent {
  static propTypes = {
    article: PropTypes.shape({
      id:PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      text: PropTypes.string
    }).isRequired,
    isOpen: PropTypes.bool,
    toggleOpen: PropTypes.func
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
          primary 
          onClick = {toggleOpen} 
        />
        <RaisedButton 
          label="delete" 
          onClick={this.handleDelete} 
        />
        {this.getBody()}
        <div className="comment__wrap">
          <CommentsList comments={article.comments} />
        </div>
      </Paper>
    )
  }

  handleDelete = () => {
    const {deleteArticle, article} = this.props;
    deleteArticle(article.id);
    console.log('deleting');
  }

  getBody() {
    const {article, isOpen} = this.props;
    if(!isOpen) return null;
    return <section className="article__text">
      {article.text}
    </section>;
  }
}

export default connect(null, {deleteArticle})(Article);