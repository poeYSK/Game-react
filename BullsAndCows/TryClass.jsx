import React, { Component } from 'react';

class TryClass extends Component {
    render() {
        return (
            <li>
                <div>{this.props.tryInfo.try}</div>
                <div><b>{this.props.tryInfo.result}</b></div>
            </li>
        );
    }
}

export default TryClass;