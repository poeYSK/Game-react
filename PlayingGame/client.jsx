import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader/root';

import ComprehensiveGame from './ComprehensiveGame';

const Hot = hot(ComprehensiveGame);

ReactDOM.render(<Hot />, document.querySelector('#root'));