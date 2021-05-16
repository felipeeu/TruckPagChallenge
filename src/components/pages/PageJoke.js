import React, { Fragment } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Layout from './Layout';

const PageJoke = ({ jokes, category }) => {
	return (
		<Fragment>
			<CssBaseline />
			<Layout jokes={jokes} category={category} />
		</Fragment>
	);
};
export default PageJoke;
