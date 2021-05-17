import React, { useState } from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ children, password, ...rest }) => {
	return (
		<Route
			{...rest}
			render={({ location }) =>
				password.length > 0 ? ( // use any password
					children
				) : (
					<Redirect
						to={{
							pathname: '/',
							state: { from: location }
						}}
					/>
				)}
		/>
	);
};

export default PrivateRoute;
