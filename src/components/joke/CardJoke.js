import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
	root: {
		width: 275,
		height: 275
	},
	bullet: {
		display: 'inline-block',
		margin: '0 2px',
		transform: 'scale(0.8)'
	},
	title: {
		fontSize: 14
	},
	pos: {
		marginBottom: 12
	}
});
const CardJoke = ({ data }) => {
	const classes = useStyles();

	return (
		<Card className={classes.root} variant="outlined">
			<CardContent>
				<Typography className={classes.title} color="textSecondary" gutterBottom>
					Joke number
				</Typography>
				<Typography variant="h5" component="h2">
					{data.id}
				</Typography>
				<Typography className={classes.pos} color="textSecondary">
					{data.categories[0] || 'no category'}
				</Typography>
				<Typography variant="body2" component="p">
					{data.joke}
				</Typography>
			</CardContent>
		</Card>
	);
};

export default CardJoke;
