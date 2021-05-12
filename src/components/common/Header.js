import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { AppBar, Toolbar, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
	root: {},
	toolbar: {
		height: 64
	}
});

const Header = ({ className, ...rest }) => {
	const classes = useStyles();

	return (
		<AppBar className={clsx(classes.root, className)} elevation={0} {...rest}>
			<Toolbar className={classes.toolbar} />
		</AppBar>
	);
};

Header.propTypes = {
	className: PropTypes.string
};

export default Header;
