import React, { Fragment } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import CardJoke from './components/joke/CardJoke';

const Home = ({ jokes }) => {
	return (
		<Fragment>
			<CssBaseline />
			<Container >
				{jokes &&
					jokes.map((joke, idx) => {
						return <CardJoke data={joke} />;
					})}
			</Container>
		</Fragment>
	);
};
export default Home;
