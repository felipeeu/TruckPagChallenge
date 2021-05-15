export const filterJokesByCategories = (jokes, category) => jokes && jokes.filter((joke) => joke.categories.includes(category));
