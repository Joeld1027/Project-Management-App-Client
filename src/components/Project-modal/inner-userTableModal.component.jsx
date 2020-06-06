import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Modal, Button } from 'semantic-ui-react';
import { UserTable } from '../user-table/UserTable.component';
import { selectAllUsersNotInProject } from '../../redux/user/user.selectors';

const InnerUserTableModal = ({
	allUsers,
	updateData,
	setUpdateData,
	handleEdit,
}) => {
	const [devs, setDevs] = useState({
		addDevelopers: [],
	});

	const handleToggle = (e, { name, value }) => {
		let { [name]: array } = devs;
		if (!array.includes(value)) {
			array = [...array, value];
		} else {
			array = array.filter((a) => a !== value);
		}
		setDevs({ ...devs, [name]: array });
	};

	const handleAction = () => {
		setUpdateData({
			...updateData,
			addDevelopers: [...devs.addDevelopers],
		});
	};

	return (
		<Modal
			trigger={<Button icon='plus' circular color='vk' inverted />}
			header='Select Personal to Add'
			onMount={() => setDevs({ addDevelopers: [] })}
			onActionClick={handleAction}
			content={
				<UserTable
					toggleType='addDevelopers'
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
