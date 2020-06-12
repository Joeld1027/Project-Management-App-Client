import React, { useState } from 'react';
import axios from 'axios';
import { connect, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
	Container,
	Breadcrumb,
	Card,
	Divider,
	Segment,
	Grid,
	List,
	Header,
	Label,
	Button,
} from 'semantic-ui-react';
import { updateTask } from '../../redux/tasks/tasks.actions';

import CommentsContainer from '../../components/comments/commentsContainer.component';
import { selectOneTask } from '../../redux/tasks/tasks.selectors';
import TaskEditModal from './task-edit-modal.component';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { setState } from '../../services/apicall';

const sections = [
	{ key: 'Home', content: 'Tasks', link: true },
	{ key: 'Shirt', content: 'Task Details', active: true },
];

const TaskDetails = ({ currentTask, currentUser, updateTask }) => {
	const userId = currentUser.userInfo._id;
	const [assignUserToTask] = useState({
		assignUserToTask: userId ? userId : '',
	});
	const [completeTask] = useState({
		status: 'Resolved',
	});
	const dispatch = useDispatch();
	const {
		name,
		description,
		category,
		priority,
		createdDate,
		assignedProject,
		assignedDevs,
		status,
		_id,
	} = currentTask || {};
	const [project] = assignedProject || [];
	const { role } = currentUser.userInfo || {};

	const editData = {
		name,
		description,
		category,
		priority,
		project,
		_id,
	};

	const history = useHistory();

	const updateUserAndStatus = async (data) => {
		try {
			await axios.patch(
				`http://localhost:5000/api/tasks/${_id}`,
				data
			);
			setState(dispatch);
			console.log('done');
		} catch (err) {
			console.log(err);
		}
	};

	const returnBack = () => {
		history.push('/user/tasks');
	};

	return (
		<Container>
			<Breadcrumb
				onClick={returnBack}
				icon='right angle'
				sections={sections}
			/>
			{(role === 'Admin' ||
				role === 'Demo-Manager' ||
				role === 'Demo-Developer' ||
				role === 'Demo-Admin') && (
				<Header floated='right'>
					<TaskEditModal editData={editData} />
				</Header>
			)}
			<Divider />

			<Grid relaxed stackable>
				<Grid.Row columns={3}>
					<Grid.Column width={6}>
						<Card
							fluid
							extra={`Current Project: ${
								project ? project.name : 'No Project'
							}`}
							centered
							color='teal'
							raised
							header={name}
							meta={
								<Label color='green' horizontal>
									{status}
								</Label>
							}
							description={description}
						/>
					</Grid.Column>
					<Grid.Column width={7}>
						<Segment raised compact color='teal'>
							<List horizontal>
								<List.Item
									header='Created On'
									description={new Date(
										createdDate
									).toLocaleDateString()}
								/>
								<List.Item header='Category' description={category} />
								<List.Item header='Priority' description={priority} />
								<List.Item
									header='Created By'
									description='Creator name'
								/>
							</List>
						</Segment>
					</Grid.Column>
					<Grid.Column width={3}>
						{assignedDevs &&
							(status === 'Pending' && assignedDevs.length === 0 ? (
								<Button
									onClick={() =>
										updateUserAndStatus(assignUserToTask)
									}
									primary
									icon='tasks'
									content='Start Task'
								/>
							) : null)}
						{status === 'In Progress' &&
						userId === assignedDevs[0] ? (
							<Button
								compact
								onClick={() => updateUserAndStatus(completeTask)}
								positive
								icon='check'
								content='Complete Task'
							/>
						) : null}
					</Grid.Column>
				</Grid.Row>

				<Grid.Row centered>
					<Grid.Column>
						<Header textAlign='center' content='Comments' />
						{_id && <CommentsContainer taskId={_id} />}
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</Container>
	);
};

const mapStateToProps = (state, ownProps) => {
	return {
		currentTask: selectOneTask(ownProps.match.params.id)(state),
		currentUser: selectCurrentUser(state),
	};
};

export default connect(mapStateToProps, { updateTask })(TaskDetails);
