import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader/root';

import Omok from './Omok';

const Hot = hot(Omok);

ReactDOM.render(<Hot />, document.querySelector('#root'));