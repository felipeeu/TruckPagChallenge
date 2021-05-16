import React, { useEffect, useState } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import ProTip from './ProTip';
import Header from './components/common/Header';
import Home from './Home';
import { getJokesCategories, getJokes } from './api';
import { Route, Switch, withRouter } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import PageJoke from './components/pages/PageJoke';

function Copyright() {
	return (
		<Typography variant="body2" color="textSecondary" align="center">
			{'Copyright © '}
			<Link color="inherit" href="https://material-ui.com/">
				Your Website
			</Link>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	);
}

export default withRouter(function App(props) {
	const [ categories, setCategories ] = useState([]);
	const [ jokes, setJokes ] = useState([]);
	const [ category, setCategory ] = useState('');

	useEffect(() => {
		getJokesCategories().then((response) => response && setCategories(response.data.value));
	}, []);

	useEffect(() => {
		getJokes().then((response) => response && setJokes(response.data.value));
	}, []);

	return (
		<Container maxWidth="sm">
			<Header categories={categories} setCategory={setCategory} />
			<Box my={10}>
				<Switch>
					<Route path="/nerdy">
						<PageJoke jokes={jokes} category={category || 'nerdy'} />
					</Route>
					<Route path="/noexplicit">
						<PageJoke jokes={jokes} category={category || 'noexplicit'} />
					</Route>
					<PrivateRoute path="/explicit">
						<PageJoke jokes={jokes} category={category || 'explicit'} />
					</PrivateRoute>
					<Route path="/">
						<div>TETETETETE</div>
					</Route>
				</Switch>
			</Box>
		</Container>
	);
});
