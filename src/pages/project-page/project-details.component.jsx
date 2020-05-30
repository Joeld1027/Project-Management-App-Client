import React, { useEffect } from 'react';
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
	Label,
} from 'semantic-ui-react';
import { connect } from 'react-redux';
import { getOneProject } from '../../redux/projects/projects.actions';

const ProjectDetails = ({ project, getOneProject, isLoading }) => {
	const { id } = useParams();
	useEffect(() => {
		getOneProject(id);
	}, [getOneProject, id]);

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
			<Divider />
			{isLoading ? (
				<div>Loading...</div>
			) : (
				project && (
					<Container>
						<Segment padded color='teal'>
							<Grid>
								<Grid.Row>
									<Grid.Column width={6}>
										<Card
											fluid
											extra='Manager: Name'
											centered
											raised
											header={project.projectName}
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
											{project.asignedDevs.map((dev) => (
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
				)
			)}
		</div>
	);
};

const mapStateToProps = (state) => ({
	project: state.projects.oneProject,
	isLoading: state.projects.isLoading,
});

export default connect(mapStateToProps, { getOneProject })(
	ProjectDetails
);
