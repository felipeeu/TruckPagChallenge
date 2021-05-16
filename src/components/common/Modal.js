import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Input from './Input';

const Modal = () => {
	const [ open, setOpen ] = React.useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<div>
			<Dialog
				open={true}
				onClose={handleClose}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
			>
				<DialogTitle id="alert-dialog-title">{'Explicit Jokes'}</DialogTitle>
				<DialogContent>
					<DialogContentText id="alert-dialog-description">
						Insert the password to see explicit jokes.
					</DialogContentText>
				</DialogContent>
				<Input />
				<DialogActions>
					{/* <p>*password: challengefelipe</p> */}
					<Button onClick={handleClose} color="primary">
						Ok
					</Button>
					<Button onClick={handleClose} color="primary" autoFocus>
						Cancel
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
};

export default Modal;
