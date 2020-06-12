import React, { useState } from 'react';
import { Button, Confirm } from 'semantic-ui-react';

const ConfirmCommentDelete = ({ handleDelete, commentId }) => {
	const [open, setOpen] = useState(false);

	const openModal = () => setOpen(true);
	const closeModal = () => setOpen(false);
	const handleConfirm = (e) => {
		e.preventDefault();
		handleDelete(commentId);
		closeModal();
	};

	return (
		<div>
			<Button
				compact
				size='mini'
				color='google plus'
				onClick={openModal}
			>
				Delete
			</Button>
			<Confirm
				open={open}
				onCancel={closeModal}
				onConfirm={handleConfirm}
			/>
		</div>
	);
};
export default ConfirmCommentDelete;
