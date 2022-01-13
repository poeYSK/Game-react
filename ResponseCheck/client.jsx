import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader/root';

import Response from './ResponseHooks';

const Hot = hot(Response);

ReactDOM.render(<Hot />, document.querySelector('#root'));