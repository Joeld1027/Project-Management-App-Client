import React from 'react';
import { connect } from 'react-redux';
import { Modal, Button } from 'semantic-ui-react';
import { UserTable } from '../user-table/UserTable.component';
import { selectAllUsersNotInProject } from '../../redux/user/user.selectors';

const InnerUserTableModal = ({
	allUsers,
	updateData,
	handleToggle,
}) => {
	return (
		<Modal
			trigger={
				<Button
					content='Add More Personnel to project.'
					icon='plus'
					color='vk'
					inverted
				/>
			}
			header='Select Personnel to Add'
			content={
				<UserTable
					ifchecked={updateData}
					users={allUsers}
					istoggle
					handleToggle={handleToggle}
				/>
			}
			actions={[{ key: 'done', content: 'Done', positive: true }]}
		/>
	);
};

const mapStateToProps = (state, { projectId }) => {
	return {
		allUsers: selectAllUsersNotInProject(projectId)(state),
	};
};

export default connect(mapStateToProps)(InnerUserTableModal);
