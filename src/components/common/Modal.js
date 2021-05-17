import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Input from './Input';
import { useHistory } from 'react-router-dom';

const Modal = ({ setModalOpen, modalOpen, inputValue, handlePassword }) => {
	const handleClose = () => {
		setModalOpen(false);
	};
	const history = useHistory();

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
						Insert the password to see explicit jokes. (use any string for tests)
					</DialogContentText>
				</DialogContent>
				<Input inputValue={inputValue} handlePassword={handlePassword} />
				<DialogActions>
					<Button
						onClick={() => {
							history.push('/explicit');
							setModalOpen(false);
						}}
						color="primary"
					>
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
