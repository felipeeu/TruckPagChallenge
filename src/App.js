import React, { useEffect, useState } from 'react';
import Container from '@material-ui/core/Container';
import Header from './components/common/Header';
import Modal from './components/common/Modal';
import { getJokesCategories, getJokes } from './api';
import { Route, Switch, withRouter } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import PageJoke from './components/pages/PageJoke';
import { filterJokesByCategories, noExplicitJokes, jokesWithoutCategory } from './functions';



export default withRouter(function App() {
	const [ categories, setCategories ] = useState([]);
	const [ jokes, setJokes ] = useState([]);
	const [ category, setCategory ] = useState('');
	const [ modalOpen, setModalOpen ] = useState(false);
	const [ inputValue, setInputValue ] = useState('');
	const [ password, setPassword ] = useState('');

	const handleChange = (event) => {
		setInputValue(event.target.value);
	};
	const handlePassword = (value) => {
		setPassword(value);
	};

	useEffect(() => {
		getJokesCategories().then((response) => response && setCategories(response.data.value));
	}, []);

	useEffect(() => {
		getJokes().then((response) => response && setJokes(response.data.value));
	}, []);

	return (
		<Container >
			<Header
				categories={categories}
				setCategory={setCategory}
				setModalOpen={setModalOpen}
				handlePassword={handlePassword}
			/>
			<Modal
				setModalOpen={setModalOpen}
				modalOpen={modalOpen}
				inputValue={inputValue.password}
				handleChange={handleChange}
				handlePassword={handlePassword}
			/>

			<Switch>
				<Route path="/nerdy">
					<PageJoke jokes={filterJokesByCategories(jokes, category)} title={'Nerdy Jokes'} />
				</Route>
				<PrivateRoute path="/explicit" password={password}>
					<PageJoke jokes={filterJokesByCategories(jokes, category)} title={'Explicit Jokes'} />
				</PrivateRoute>
				<Route path="/others">
					<PageJoke jokes={jokesWithoutCategory(jokes)} title={'Others Jokes (without categories)'} />
				</Route>
				<Route path="/">
					<PageJoke jokes={noExplicitJokes(jokes)} title={'All Jokes'} />
				</Route>
			</Switch>
		</Container>
	);
});
