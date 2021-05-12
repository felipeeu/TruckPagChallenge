import React from 'react';
import clsx from 'clsx';
import MenuIcon from '@material-ui/icons/Menu';
import { AppBar, IconButton, makeStyles, Toolbar, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import Drawer from './Drawer';

const useStyles = makeStyles({
	root: {},
	toolbar: {
		height: 64
	}
});

const Header = (props, { className, ...rest }) => {
	const classes = useStyles();
	const [ open, setOpen ] = React.useState(false);
	const { categories } = props;

	const handleDrawerOpen = () => {
		setOpen(true);
	};
	return (
		<div className={classes.root}>
			<AppBar className={clsx(classes.root, className)} elevation={0} {...rest}>
				<Toolbar className={classes.toolbar}>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						onClick={handleDrawerOpen}
						edge="start"
						className={clsx(classes.menuButton, open && classes.hide)}
					>
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" noWrap>
						Chuck Norris Jokes
					</Typography>
				</Toolbar>
			</AppBar>
			<Drawer categories={categories} open={open} setOpen={setOpen} />
		</div>
	);
};

Header.propTypes = {
	className: PropTypes.string
};

export default Header;
