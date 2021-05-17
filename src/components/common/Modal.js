import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Input from './Input';

const Modal = ({ setModalOpen, modalOpen, inputValue, handleChange, handlePassword }) => {
	const handleClose = () => {
		setModalOpen(false);
	};

	return (
		<div>
			<Dialog
				open={modalOpen}
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
				<Input inputValue={inputValue} handleChange={handleChange} />
				<DialogActions>
					<Button onClick={handlePassword} color="primary">
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
