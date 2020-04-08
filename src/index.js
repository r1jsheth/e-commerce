import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, withRouter } from 'react-router-dom';
import './css/index.css';
import App from './App';
import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import history from './history';

const AppWithRouter = withRouter(App);

ReactDOM.render(
	<Router history={history}>
		<ReactNotification />
		<AppWithRouter />
	</Router>,
	document.getElementById('root')
);
