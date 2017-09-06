import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

export default class Article extends Component {
  constructor(props){
    super(props)

    this.state = {
      isOpen: false
    }
  }

  render() {
    const {article} = this.props;
    const {isOpen} = this.state;
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
          onClick = {this.toggleOpen} 
        />
        {this.getBody()}
        <div className="comment__wrap">{this.props.children}</div>
      </Paper>
    )
  }

  getBody() {
    if(!this.state.isOpen) return null;
    const {article} = this.props
    return <section className="article__text">{article.text}</section>;
  }

  toggleOpen = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
}

