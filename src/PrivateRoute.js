import React, { useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ children, setModalOpen, inputValue, password, ...rest }) => {
	console.log('password ', password);
	useEffect(() => {
		setModalOpen(true);
	
	}, []);

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
