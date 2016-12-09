import React from 'react';
import ReactDOM from 'react-dom';

import Bootstrap from 'bootstrap-without-jquery'; // eslint-disable-line no-unused-vars

import GameOfLife from './GameOfLife';

const app =  document.getElementById( 'app' );

ReactDOM.render( ( <GameOfLife container={app} /> ), app );
