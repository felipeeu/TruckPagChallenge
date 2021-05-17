import React, { Fragment } from 'react';
import Layout from './Layout';
import Loader from '../common/Loader';
import Box from '@material-ui/core/Box'


const PageJoke = ({ jokes, title }) => {
	return (
		<Fragment>
			<Box my={10}>
			<h1>{title}</h1>
			{jokes.length > 0 ? <Layout jokes={jokes} /> : <Loader />}
			</Box>
		</Fragment>
	);
};
export default PageJoke;
