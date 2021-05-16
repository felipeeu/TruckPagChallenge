import React, { Fragment, useState, useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import CardJoke from '../joke/CardJoke';
import { filterJokesByCategories } from '../../functions';

const Layout = ({ jokes, category }) => {
	const [ data, setData ] = useState([]);

	React.useEffect(
		() => {
			setData(filterJokesByCategories(jokes, category));
		},
		[ jokes ]
	);
	return (
		<Fragment>
			<CssBaseline />
			<Container>
				{data &&
					data.map((joke, idx) => {
						return <CardJoke key={idx} data={joke} />;
					})}
			</Container>
		</Fragment>
	);
};
export default Layout;
