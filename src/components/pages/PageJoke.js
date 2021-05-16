import React, { Fragment } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Layout from './Layout';

const PageJoke = ({ jokes, title }) => {
	return (
		<Fragment>
			<CssBaseline />
			<h1>{title}</h1>
			<Layout jokes={jokes} />
		</Fragment>
	);
};
export default PageJoke;
