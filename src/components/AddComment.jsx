import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {RaisedButton} from 'material-ui';

import './AddComment.scss';

export default class AddComment extends Component{
    static propTypes = {

    }

    state = {
        text: '',
        user: ''
    }

    render() {
        const areaStyle = {
            width: '100%',
            height: 100,
            borderRadius: 2,
            padding: 15,
            resize: 'none'
        };
        const userStyle = {
            height: 30,
            width: 200,
            borderRadius: 2
        }
        const btnStyle = {
            color: '#FF7043'
        }
        return(
            <form onSubmit = {this.handleSubmit}>
                <div className='add__comment-wrap'>
                    <div className='add__comment-user'>
                        UserName: <input 
                            style={userStyle} 
                            type='text' 
                            value={this.state.user} 
                            onChange={this.handleChange('user')} 
                            className={'add__comment-area ' + this.getClassName('user')} 
                        />
                    </div>
                    <span>Comment:</span> 
                    <textarea  
                        style={areaStyle} 
                        value = {this.state.text} 
                        onChange={this.handleChange('text')} 
                        className={'add__comment-area ' + this.getClassName('text')} 
                    />
                    <RaisedButton 
                        label="add Comment" 
                        style={btnStyle} 
                        type="submit" 
                    />
                </div>
            </form>
        )
    }

    handleSubmit = (ev) =>{
        ev.preventDefault();
        this.setState({
            user: '',
            text: ''
        })
    }

    handleChange = type => ev => {
        const {value} = ev.target;
        if(value.length > limits[type].max) return;
        this.setState({
            [type]: value
        })
    }

    getClassName = type => this.state[type].length && this.state[type].length < limits[type].min ? 'form__input-error' : '';
};

const limits = {
    user: {
        min: 5,
        max: 15
    },
    text: {
        min: 20,
        max: 50
    }
};