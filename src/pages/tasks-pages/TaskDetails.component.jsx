import React from 'react';
import { connect } from 'react-redux';
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

const sections = [
	{ key: 'Home', content: 'Tasks', link: true },
	{ key: 'Shirt', content: 'Task Details', active: true },
];

const TaskDetails = ({ currentTask }) => {
	const {
		name,
		description,
		category,
		priority,
		createdDate,
		assignedProject,
		status,
	} = currentTask || {};

	let [project] = assignedProject || [];
	console.log(project);

	return (
		<Container>
			<Breadcrumb icon='right angle' sections={sections} />
			<Divider />
			<Grid relaxed>
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
								<List.Item>
									<Image
										avatar
										src='https://react.semantic-ui.com/images/avatar/small/stevie.jpg'
									/>
									<List.Content>
										<List.Header as='a'>Stevie Feliciano</List.Header>
									</List.Content>
								</List.Item>
								<List.Item>
									<Image
										avatar
										src='https://react.semantic-ui.com/images/avatar/small/elliot.jpg'
									/>
									<List.Content>
										<List.Header as='a'>Elliot Fu</List.Header>
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
	};
};

export default connect(mapStateToProps)(TaskDetails);
