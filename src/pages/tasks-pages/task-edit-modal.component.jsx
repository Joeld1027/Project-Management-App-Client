import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setState } from '../../services/apicall';
import TaskForm from './task-form.component';
import { Modal, Header, Button, Confirm } from 'semantic-ui-react';

const TaskEditModal = ({ editData }) => {
	const history = useHistory();
	const dispatch = useDispatch();
	const [open, setOpen] = useState(false);
	const [confirm, setConfirm] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => {
		setOpen(false);
	};
	const handleDelete = async () => {
		return await axios
			.delete(`/api/tasks/${editData._id}`)
			.then((response) => {
				console.log(response);
				setConfirm(!confirm);
				console.log('Task Deleted');
				setState(dispatch);
				history.push('/user/tasks');
			})
			.catch((err) => console.log(err));
	};
	return (
		<div>
			<Modal
				size='large'
				centered={false}
				trigger={
					<Button
						onClick={handleOpen}
						content='Edit'
						labelPosition='left'
						icon='edit'
						primary
						compact
					/>
				}
				open={open}
				onClose={handleClose}
			>
				<Header icon='edit' content='EDIT TASK' />

				<Modal.Content>
					<TaskForm editData={editData} />
				</Modal.Content>
				<Modal.Actions>
					<Button
						onClick={() => setConfirm(true)}
						floated='left'
						compact
						color='google plus'
						content='Delete Task'
					/>
					<Confirm
						content={false}
						open={confirm}
						onCancel={() => setConfirm(false)}
						onConfirm={handleDelete}
						header='Are you sure? This action will delete the Task.'
					/>
					<Button onClick={handleClose} color='teal'>
						Close
					</Button>
				</Modal.Actions>
			</Modal>
		</div>
	);
};

export default TaskEditModal;
