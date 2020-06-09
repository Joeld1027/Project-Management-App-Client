import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
	Container,
	Breadcrumb,
	Card,
	Divider,
	Segment,
	Grid,
	List,
	Image,
	Header,
	Feed,
	Label,
} from 'semantic-ui-react';
import Comments from '../../components/comments/Comments.component';
import { selectOneTask } from '../../redux/tasks/tasks.selectors';
import TaskEditModal from './task-edit-modal.component';
import { selectCurrentUser } from '../../redux/user/user.selectors';

const sections = [
	{ key: 'Home', content: 'Tasks', link: true },
	{ key: 'Shirt', content: 'Task Details', active: true },
];

const TaskDetails = ({ currentTask, currentUser }) => {
	const {
		name,
		description,
		category,
		priority,
		createdDate,
		assignedProject,
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
			{role === 'Admin' && (
				<Header floated='right'>
					<TaskEditModal editData={editData} />
				</Header>
			)}
			<Divider />

			<Grid relaxed stackable>
				<Grid.Row columns={2}>
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
					<Grid.Column width={10}>
						<Segment padded raised compact color='teal'>
							<List horizontal relaxed>
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
				</Grid.Row>

				<Grid.Row centered divided>
					<Grid.Column width={8}>
						<Segment padded>
							<Header textAlign='center' content='Assigned Devs' />
							<List divided verticalAlign='middle'>
								<List.Item>
									<Image
										avatar
										src='https://react.semantic-ui.com/images/avatar/small/daniel.jpg'
									/>
									<List.Content>
										<List.Header as='a'>Daniel Louise</List.Header>
									</List.Content>
								</List.Item>
							</List>
							<Header textAlign='center' content='Task History' />
							<Feed>
								<Feed.Event
									icon='pencil'
									date='Today'
									summary="You posted on your friend Stevie Feliciano's wall."
								/>

								<Feed.Event>
									<Feed.Label icon='pencil' />
									<Feed.Content
										date='Today'
										summary="You posted on your friend Stevie Feliciano's wall."
									/>
								</Feed.Event>
							</Feed>
						</Segment>
					</Grid.Column>
					<Grid.Column width={8}>
						<Header textAlign='center' content='Comments' />
						<Comments />
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

export default connect(mapStateToProps)(TaskDetails);
