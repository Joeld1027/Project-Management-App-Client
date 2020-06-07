import React from 'react';
import { connect } from 'react-redux';
import { Modal, Button } from 'semantic-ui-react';
import { TaskTable } from '../taskTable/TaskTable.component';
import { selectFilteredTasks } from '../../redux/tasks/tasks.selectors';

const InnerTaskTableModal = ({
	updateData,
	handleToggle,
	filteredTasks,
}) => {
	return (
		<Modal
			trigger={
				<Button
					icon='plus'
					content='Add more Tasks.'
					color='vk'
					inverted
				/>
			}
			header='Select Tasks to add'
			content={
				<TaskTable
					ifchecked={updateData}
					allTasks={filteredTasks}
					usefor='projectForm'
					toggleType={true}
					handleToggle={handleToggle}
				/>
			}
			actions={[{ key: 'done', content: 'Done', positive: true }]}
		/>
	);
};

const mapStateToProps = (state) => {
	return {
		filteredTasks: selectFilteredTasks(state),
	};
};

export default connect(mapStateToProps)(InnerTaskTableModal);
