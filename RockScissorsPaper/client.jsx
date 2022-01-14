import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader/root';

import RSP from './RSPHooks';

const Hot = hot(RSP);

ReactDOM.render(<Hot />, document.querySelector('#root'));