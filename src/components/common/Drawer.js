import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { LightBulbIcon } from '../../ProTip';
import { Link } from 'react-router-dom';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
	drawer: {
		width: drawerWidth,
		flexShrink: 0
	},
	drawerPaper: {
		width: drawerWidth
	},
	drawerHeader: {
		display: 'flex',
		alignItems: 'center',
		padding: theme.spacing(0, 1),
		...theme.mixins.toolbar,
		justifyContent: 'flex-end'
	}
}));

const MenuDrawer = ({ categories, open, setOpen, setCategory, setModalOpen, handlePassword }) => {
	const classes = useStyles();
	const theme = useTheme();
	const handleDrawerClose = () => {
		setOpen(false);
	};

	return (
		<Drawer
			className={classes.drawer}
			variant="persistent"
			anchor="left"
			open={open}
			classes={{
				paper: classes.drawerPaper
			}}
		>
			<div className={classes.drawerHeader}>
				<IconButton onClick={handleDrawerClose}>
					{theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
				</IconButton>
			</div>
			<Divider />
			<List>
				<ListItem button>
					<ListItemIcon>
						<LightBulbIcon />
					</ListItemIcon>

					<ListItemText
						primary={'explicit'}
						onClick={() => {
							handlePassword('');
							setCategory('explicit');
							setModalOpen(true);
						}}
					/>
				</ListItem>

				{categories &&
					categories.map(
						(text, index) =>
							text !== 'explicit' && (
								<ListItem button key={index}>
									<ListItemIcon>
										<LightBulbIcon />
									</ListItemIcon>
									<Link
										to={`/${text}`}
										onClick={() => {
											setCategory(text);
										}}
									>
										<ListItemText primary={text} />
									</Link>
								</ListItem>
							)
					)}
				<ListItem button>
					<ListItemIcon>
						<LightBulbIcon />
					</ListItemIcon>
					<Link to={`/others`} onClick={() => setCategory('others')}>
						<ListItemText primary={'Others'} />
					</Link>
				</ListItem>
				<ListItem button>
					<ListItemIcon>
						<LightBulbIcon />
					</ListItemIcon>
					<Link to={`/`} onClick={() => setCategory('noexplicit')}>
						<ListItemText primary={'All Jokes'} />
					</Link>
				</ListItem>
			</List>
		</Drawer>
	);
};
export default MenuDrawer;
