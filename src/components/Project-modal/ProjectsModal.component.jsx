import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { Modal, Button, Header, Icon } from 'semantic-ui-react';
import { ProjectEditForm } from './ProjectEditform.component';
import { setState } from '../../services/apicall';

const INITIAL_STATE = {
	developers: [],
	addDevelopers: [],
	tasks: [],
};

export const ProjectsModal = ({ theproject }) => {
	const dispatch = useDispatch();
	console.log(theproject);
	const [updateData, setUpdateData] = useState(INITIAL_STATE);
	const [open, setOpen] = useState(false);

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
			.then(() => console.log('Project Deleted'))
			.catch((err) => console.log(err));
	};

	return (
		<div>
			<Modal
				size='large'
				centered={false}
				trigger={
					<Button compact color='vk' onClick={handleOpen}>
						Edit
					</Button>
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
						onClick={handleDelete}
						floated='left'
						compact
						color='google plus'
						content='Delete Project'
					/>
					<Button color='facebook' onClick={handleEdit} inverted>
						<Icon name='checkmark' /> Save Changes
					</Button>
				</Modal.Actions>
			</Modal>
		</div>
	);
};
