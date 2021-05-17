import axios from 'axios';
const api = 'https://api.icndb.com';



export const getJokesCategories = () => axios.get(`${api}/categories`);
export const getJokes = () =>
	axios.get(
		`${api}/jokes`
	);
