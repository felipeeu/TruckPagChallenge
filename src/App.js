import React, { useEffect, useState } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import ProTip from './ProTip';
import Header from './components/common/Header';
import Modal from './components/common/Modal';
import { getJokesCategories, getJokes } from './api';
import { Route, Switch, withRouter } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import PageJoke from './components/pages/PageJoke';
import { filterJokesByCategories, noExplicitJokes, jokesWithoutCategory } from './functions';

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
			<Modal />
			<Box my={10}>
				<Switch>
					<Route path="/nerdy">
						<PageJoke jokes={filterJokesByCategories(jokes, category)} title={'Nerdy Jokes'} />
					</Route>
					<PrivateRoute path="/explicit">
						<PageJoke jokes={filterJokesByCategories(jokes, category)} title={'Explicit Jokes'} />
					</PrivateRoute>
					<Route path="/others">
						<PageJoke jokes={jokesWithoutCategory(jokes)} title={'Others Jokes (without categories)'} />
					</Route>
					<Route path="/">
						<PageJoke jokes={noExplicitJokes(jokes)} title={'All Jokes'} />
					</Route>
				</Switch>
			</Box>
		</Container>
	);
});
