import React from 'react';
import { Button, Modal, Form } from 'semantic-ui-react';

const CommentEditModal = ({
	commentId,
	handleEdit,
	comment,
	handleChange,
}) => (
	<Modal
		trigger={
			<Button size='mini' compact primary>
				Edit
			</Button>
		}
		header='Reminder!'
		content={
			<Form
				reply
				onSubmit={(e) => {
					e.preventDefault();
					handleEdit(commentId);
				}}
			>
				<Form.TextArea onChange={handleChange} name='comment' />
				<Button content='Update Comment' primary />
			</Form>
		}
		actions={[{ key: 'done', content: 'Close', positive: true }]}
	/>
);

export default CommentEditModal;
