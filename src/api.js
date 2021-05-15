import axios from 'axios';
const api = 'https://api.icndb.com';

// Generate a unique token for storing your bookshelf data on the backend server.

export const getJokesCategories = () => axios.get(`${api}/categories`);
export const getJokes = () =>
	axios.get(
		`${api}/jokes`
	);
