import React, { useEffect, useState } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import ProTip from './ProTip';
import Header from './components/common/Header';
import CardJoke from './components/joke/CardJoke';
import { getJokesCategories, getJokes } from './api';
import { filterJokesByCategories } from './functions';

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

export default function App() {
	const [ categories, setCategories ] = useState([]);
	const [ jokes, setJokes ] = useState([]);
	const [ category, setCategory ] = useState('');
	const [ filteredJokes, setFilteredJokes ] = useState([]);

	console.log('jokes ', filteredJokes, 'cat', category);

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
				<CardJoke />
			</Box>
		</Container>
	);
}
