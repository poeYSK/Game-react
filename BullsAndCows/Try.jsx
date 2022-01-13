import React, { Component } from 'react';

class Try extends Component {
    render() {
        return (
            <li>
                <div>{this.props.tryInfo.try}</div>
                <div><b>{this.props.tryInfo.result}</b></div>
            </li>
        );
    }
}

export default Try;