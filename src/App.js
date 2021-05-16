import React, { useEffect, useState } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import ProTip from './ProTip';
import Header from './components/common/Header';
import CardJoke from './components/joke/CardJoke';
import Home from './Home';
import { getJokesCategories, getJokes } from './api';
import { filterJokesByCategories, jokesWithoutCategory } from './functions';
import { Route, Switch, withRouter } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Explicit from './components/pages/Explicit';

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
	const [ filteredJokes, setFilteredJokes ] = useState([]);
	console.log(props);

	useEffect(() => {
		getJokesCategories().then((response) => response && setCategories(response.data.value));
	}, []);

	useEffect(() => {
		getJokes().then((response) => response && setJokes(response.data.value));
	}, []);

	useEffect(
		() => {
			setFilteredJokes(filterJokesByCategories(jokes, category));
		},
		[ category ]
	);

	return (
		<Container maxWidth="sm">
			<Header categories={categories} setCategory={setCategory} />
			<Box my={10}>
				<Switch>
					<Route path="/nerdy">
						{/* <Home jokes={jokes} /> */}
						<div>Nerdy Jokes</div>
					</Route>
					<Route path="/">
						<div>Home</div>
					</Route>
					<PrivateRoute path="/explicit">
						<Explicit jokes={filteredJokes} />
					</PrivateRoute>
				</Switch>
			</Box>
		</Container>
	);
});
