import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ children, ...rest }) => {
	
	return (
		<Route
			{...rest}
			render={({ location }) =>
				false ? (
					children
				) : (
					<Redirect
						to={{
							pathname: '/false',
							state: { from: location }
						}}
					/>
				)}
		/>
	);
};

export default PrivateRoute;
