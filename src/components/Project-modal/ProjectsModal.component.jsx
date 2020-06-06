import React, { useState } from 'react';
import { Modal, Button, Header, Icon } from 'semantic-ui-react';
import { ProjectEditForm } from './ProjectEditform.component';

export const ProjectsModal = ({ theproject }) => {
	const [open, setOpen] = useState(false);

	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

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
					<ProjectEditForm theproject={theproject} />
				</Modal.Content>
				<Modal.Actions>
					<Button color='facebook' onClick={handleClose} inverted>
						<Icon name='checkmark' /> Save Changes
					</Button>
				</Modal.Actions>
			</Modal>
		</div>
	);
};
