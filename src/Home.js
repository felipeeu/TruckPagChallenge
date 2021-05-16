import React, { Fragment } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Layout from './components/pages/Layout'

const Home = ({ jokes }) => {
	return (
		<Fragment>
			<CssBaseline />
			<Layout jokes={jokes}/>
		</Fragment>
	);
};
export default Home;
