import React, { Fragment } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Layout from './Layout';
import Loader from '../common/Loader';

const PageJoke = ({ jokes, title }) => {
	return (
		<Fragment>
			<CssBaseline />
			<h1>{title}</h1>
			{jokes.length > 0 ? <Layout jokes={jokes} /> : <Loader />}
		</Fragment>
	);
};
export default PageJoke;
