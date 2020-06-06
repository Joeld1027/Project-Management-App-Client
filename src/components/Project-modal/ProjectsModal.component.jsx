import React, { useState } from 'react';
import axios from 'axios';
import { Modal, Button, Header, Icon } from 'semantic-ui-react';
import { ProjectEditForm } from './ProjectEditform.component';

export const ProjectsModal = ({ theproject }) => {
	console.log(theproject);
	const [updateData, setUpdateData] = useState({});
	const [open, setOpen] = useState(false);

	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const handleEdit = async () => {
		return await axios
			.patch(
				`http://localhost:5000/api/projects/${theproject._id}`,
				updateData
			)
			.then(() => console.log('project updated'))
			.then(() => setOpen(false))
			.catch((err) => console.log(err));
	};
	const handleClick = async () => {
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
						updateData={updateData}
						setUpdateData={setUpdateData}
						theproject={theproject}
					/>
				</Modal.Content>
				<Modal.Actions>
					<Button
						onClick={handleClick}
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
