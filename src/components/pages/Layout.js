import React, { Fragment } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import CardJoke from '../joke/CardJoke';

const Layout = ({ jokes }) => {
	return (
		<Fragment>
			<CssBaseline />
			<Container>
				{jokes &&
					jokes.map((joke, idx) => {
						return <CardJoke key={idx} data={joke} />;
					})}
			</Container>
		</Fragment>
	);
};
export default Layout;
