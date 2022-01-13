import React, { memo } from 'react';

const TryHooks = memo(({tryInfo}) => {
    return (
        <li>
            <div>{tryInfo.try}</div>
            <div><b>{tryInfo.result}</b></div>
        </li>
    );
});

export default TryHooks;