import React, { useEffect, useState } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import ProTip from './ProTip';
import Header from './components/common/Header';
import { getJokesCategories } from './api';

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

	useEffect(() => {
		getJokesCategories().then((response) => response && setCategories(response.data.value));
	}, []);
	console.log('CATEGO', categories);

	return (
		<Container maxWidth="sm">
			<Header categories={categories}/>
			<Box my={10} />
		</Container>
	);
}
