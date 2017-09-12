import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {filter} from '../../AC';

import Select from './Select.jsx';
import Picker from './Picker.jsx';

class Filters extends Component{
    static propTypes = {
        
    }
    
    render(){
        
        return(
            <div>
                <Picker />
                <Select />
            </div>
        )
    }
}

export default Filters;