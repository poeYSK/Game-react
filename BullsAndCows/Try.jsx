import React, { Component } from 'react';

class Try extends Component {
    render(){
        return(
            <li>
                <b>{v.fruit}</b> - {v.index}
                <div>컨텐츠0</div>
                <div>컨텐츠1</div>
                <div>컨텐츠2</div>
                <div>컨텐츠3</div>
            </li>
        );
    }
}

export default Try;