import 'react-app-polyfill/ie11';
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom'
import AppWrapper from './AppWrapper';
import { WebSocketProvider } from './context/context'
//import * as serviceWorker from './serviceWorker';

ReactDOM.render(
	<HashRouter>
		<WebSocketProvider>
			<AppWrapper></AppWrapper>
		</WebSocketProvider>
	</HashRouter>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
//serviceWorker.unregister();
