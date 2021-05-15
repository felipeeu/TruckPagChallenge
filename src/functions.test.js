import { filterJokesByCategories } from './functions';
const jokes = [
	{
		categories: [ 'explicit' ],
		id: 1,
		joke: 'Chuck Norris uses ribbed condoms inside out, so he gets the pleasure.'
	},

	{
		categories: [],
		id: 2,
		joke: 'MacGyver can build an airplane out of gum and paper clips. Chuck Norris can kill him and take it.'
	},

	{
		categories: [ 'nerdy' ],
		id: 3,
		joke: 'Chuck Norris can download emails with his pick-up.'
	}
];

describe('filter list of jokes by its categories', () => {
	it('match explicit jokes ', () => {
		expect(filterJokesByCategories(jokes, 'explicit')).toEqual(
			expect.arrayContaining([
				{
					categories: [ 'explicit' ],
					id: 1,
					joke: 'Chuck Norris uses ribbed condoms inside out, so he gets the pleasure.'
				}
			])
		);
	});
	it('match nerdy jokes ', () => {
		expect(filterJokesByCategories(jokes, 'nerdy')).toEqual(
			expect.arrayContaining([
				{
					categories: [ 'nerdy' ],
					id: 3,
					joke: 'Chuck Norris can download emails with his pick-up.'
				}
			])
		);
	});
	it('match no jokes if there isnt name category ', () => {
		expect(filterJokesByCategories(jokes, 'nojokes')).toEqual(expect.arrayContaining([]));
	});
	it('match no jokes if list is empty', () => {
		expect(filterJokesByCategories([ ], 'explicit')).toEqual(expect.arrayContaining([]));
	});
	it('match no jokes if list is null', () => {
		expect(filterJokesByCategories(null, 'explicit')).toEqual(expect.arrayContaining([]));
	});
	it('match no jokes if name of category is empty ', () => {
		expect(filterJokesByCategories(jokes, '')).toEqual(expect.arrayContaining([]));
	});
	it('match no jokes if name of category is null', () => {
		expect(filterJokesByCategories(jokes, null)).toEqual(expect.arrayContaining([]));
	});
});
