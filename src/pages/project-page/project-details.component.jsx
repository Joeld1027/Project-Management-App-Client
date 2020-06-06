import React from 'react';
import { useHistory } from 'react-router-dom';
import {
	Breadcrumb,
	Container,
	Segment,
	Grid,
	Divider,
	List,
	Card,
	Header,
	Label,
} from 'semantic-ui-react';
import { selectOneProject } from '../../redux/projects/projects.selectors';
import { connect } from 'react-redux';
import { ProjectsModal } from '../../components/Project-modal/ProjectsModal.component';
import { UserTable } from '../../components/user-table/UserTable.component';
import { TaskTable } from '../../components/taskTable/TaskTable.component';

const ProjectDetails = ({ project }) => {
	const history = useHistory();
	const returnBack = () => {
		history.push('/user/projects');
	};

	return (
		<div>
			<Breadcrumb>
				<Breadcrumb.Section onClick={returnBack} link>
					Projects
				</Breadcrumb.Section>
				<Breadcrumb.Divider />
				<Breadcrumb.Section active>Details</Breadcrumb.Section>
			</Breadcrumb>
			<Header floated='right'>
				<ProjectsModal theproject={project} />
			</Header>
			<Divider />
			{project && (
				<Container>
					<Segment padded color='teal'>
						<Grid stackable>
							<Grid.Row>
								<Grid.Column width={6}>
									<Card
										fluid
										extra={
											<Label color='teal' ribbon>
												Manager: {project.createdBy}
											</Label>
										}
										centered
										raised
										header={project.name}
										meta={
											<Label color='green' horizontal>
												In Progress
											</Label>
										}
										description={project.description}
									/>
								</Grid.Column>
								<Grid.Column width={3}>
									<Segment color='teal' size='large' raised>
										<List size='large'>
											<List.Item
												header='Started'
												description={new Date(
													project.created
												).toLocaleDateString()}
											/>
											<List.Item
												header='Due Date'
												description={new Date(
													project.deadline
												).toLocaleDateString()}
											/>
											<List.Item
												description={project.priority}
												header='Priority'
											/>
										</List>
									</Segment>
								</Grid.Column>
							</Grid.Row>
							<Grid.Row>
								<Grid.Column width={6}>
									{project.assignedDevs && (
										<UserTable
											setcontent='Assigned Developers'
											users={project.assignedDevs}
										/>
									)}
								</Grid.Column>
								<Grid.Column width={10}>
									<TaskTable
										setcontent='Project Tasks'
										usefor='projectDetails'
										allTasks={project.projectTickets}
									/>
								</Grid.Column>
							</Grid.Row>
						</Grid>
					</Segment>
				</Container>
			)}
		</div>
	);
};

const mapStateToProps = (state, ownProps) => {
	return {
		project: selectOneProject(ownProps.match.params.id)(state),
	};
};

export default connect(mapStateToProps)(ProjectDetails);
