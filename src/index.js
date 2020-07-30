/* eslint-disable react/jsx-indent */
/* eslint-disable no-tabs */
/* eslint-disable indent */
import React from 'react';
import ReactROM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './routes/App';

ReactROM.render(
	<Provider>
		<App />
	</Provider>,
	document.getElementById('app'),
);
