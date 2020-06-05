import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import {
	Breadcrumb,
	Container,
	Segment,
	Grid,
	Divider,
	List,
	Card,
	Image,
	Header,
	Label,
	Button,
} from 'semantic-ui-react';
import { selectOneProject } from '../../redux/projects/projects.selectors';
import { connect } from 'react-redux';
import { ProjectsModal } from '../../components/Project-modal/ProjectsModal.component';

const ProjectDetails = ({ oneProject }) => {
	let [project] = oneProject;
	console.log(project);

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
				<Button compact color='google plus'>
					Delete
				</Button>
			</Header>
			<Divider />
			{project && (
				<Container>
					<Segment padded color='teal'>
						<Grid>
							<Grid.Row>
								<Grid.Column width={6}>
									<Card
										fluid
										extra={
											<Label color='teal' ribbon>
												Manager Name
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
								<Grid.Column width={6}>
									<Segment color='teal' size='large' padded raised>
										<List size='large' horizontal>
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
								<Grid.Column width={8}>
									<Segment raised>
										<Label
											attached='top'
											size='large'
											content='Developers'
										/>
										{project.assignedDevs &&
											project.assignedDevs.map((dev) => (
												<List size='large' divided key={dev._id}>
													<List.Item>
														<Image
															avatar
															src='https://react.semantic-ui.com/images/avatar/small/rachel.png'
														/>
														<List.Content>
															<List.Header>
																{dev.firstName + ' ' + dev.lastName}
															</List.Header>
															<List.Description>
																{dev.role}
															</List.Description>
														</List.Content>
													</List.Item>
												</List>
											))}
									</Segment>
								</Grid.Column>
								<Grid.Column width={8}>
									<Segment>
										<Label attached='top'>HTML</Label>
									</Segment>
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
		oneProject: selectOneProject(ownProps.match.params.id)(state),
	};
};

export default connect(mapStateToProps)(ProjectDetails);
