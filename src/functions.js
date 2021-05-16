export const filterJokesByCategories = (jokes, category) =>
	jokes && jokes.filter((joke) => joke.categories.includes(category));
	
	export const jokesWithoutCategory = (jokes) => jokes && jokes.filter((joke) => joke.categories.length === 0);
	
	export const noExplicitJokes = (jokes) =>
		jokes && jokes.filter((joke) => !joke.categories.includes('explicit'));