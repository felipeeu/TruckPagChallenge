import React, { Fragment } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import CardJoke from '../joke/CardJoke';

const Layout = ({ jokes }) => {
	return (
		<Fragment>
			<CssBaseline />
			<Grid container spacing={3}>
				{jokes &&
					jokes.map((joke, idx) => {
						return (
							<Grid key={idx} item>
								<CardJoke  data={joke} cla />
							</Grid>
						);
					})}
			</Grid>
		</Fragment>
	);
};
export default Layout;
