import React from 'react';

const TryHooks = ({tryInfo}) => {
    return (
        <li>
            <div>{tryInfo.try}</div>
            <div><b>{tryInfo.result}</b></div>
        </li>
    );
}

export default TryHooks;