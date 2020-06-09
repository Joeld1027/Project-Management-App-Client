import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import {
	Modal,
	Button,
	Header,
	Icon,
	Confirm,
} from 'semantic-ui-react';
import { ProjectEditForm } from './ProjectEditform.component';
import { setState } from '../../services/apicall';

const INITIAL_STATE = {
	developers: [],
	addDevelopers: [],
	tasks: [],
	addTasks: [],
};

export const ProjectsModal = ({ theproject }) => {
	const history = useHistory();
	const dispatch = useDispatch();
	const [updateData, setUpdateData] = useState(INITIAL_STATE);
	const [open, setOpen] = useState(false);
	const [confirm, setConfirm] = useState(false);

	const handleOpen = () => setOpen(true);
	const handleClose = () => {
		setUpdateData(INITIAL_STATE);
		setOpen(false);
	};

	const handleEdit = async () => {
		return await axios
			.patch(
				`http://localhost:5000/api/projects/${theproject._id}`,
				updateData
			)
			.then(() => {
				setState(dispatch);
				setUpdateData(INITIAL_STATE);
				console.log('project updated');
			})
			.catch((err) => console.log(err));
	};
	const handleDelete = async () => {
		return await axios
			.delete(`http://localhost:5000/api/projects/${theproject._id}`)
			.then((response) => {
				console.log(response);
				setConfirm(!confirm);
				console.log('Project Deleted');
				setState(dispatch);
				history.push('/user/projects');
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
				<Header icon='edit' content='EDIT PROJECT' />

				<Modal.Content>
					<ProjectEditForm
						handleEdit={handleEdit}
						updateData={updateData}
						setUpdateData={setUpdateData}
						theproject={theproject}
					/>
				</Modal.Content>
				<Modal.Actions>
					<Button
						onClick={() => setConfirm(true)}
						floated='left'
						compact
						color='google plus'
						content='Delete Project'
					/>
					<Confirm
						content={false}
						open={confirm}
						onCancel={() => setConfirm(false)}
						onConfirm={handleDelete}
						header='Are you sure? This action will delete the project and
								the tasks assgined.'
					/>
					<Button color='facebook' onClick={handleEdit} inverted>
						<Icon name='checkmark' /> Save Changes
					</Button>
				</Modal.Actions>
			</Modal>
		</div>
	);
};
