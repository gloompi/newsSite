import React, {Component} from 'react';

export default (OriginalComponent) => class Accardeon extends Component {
    state = {
        openItemId: null
    }

    render() {
        return <OriginalComponent 
            {...this.props} 
            {...this.state} 
            toggleOpenItem={this.toggleOpenItem} 
        />
    }

    toggleOpenItem = openItemId => ev => {
        ev && ev.preventDefault && ev.preventDefault();
        this.setState({
            openItemId: openItemId === this.state.openItemId ? null : openItemId
        })
    } 
}