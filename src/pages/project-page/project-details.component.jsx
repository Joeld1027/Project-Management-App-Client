import React, { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import {
	Breadcrumb,
	Container,
	Segment,
	Grid,
	Divider,
	List,
	Item,
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
						<Segment color='teal' size='mini'>
							<Segment padded>
								<Grid>
									<Grid.Row>
										<Grid.Column width={8}>
											<Item.Group>
												<Item>
													<Item.Content>
														<Item.Header>
															{project.projectName}
														</Item.Header>
														<Item.Meta>
															<span className='price'>
																Progress 80%
															</span>
														</Item.Meta>
														<Item.Description>
															{project.description}
														</Item.Description>
													</Item.Content>
												</Item>
											</Item.Group>
										</Grid.Column>
										<Grid.Column width={6}>
											<Segment color='teal'>
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
												</List>
												<List size='large'>
													<List.Item
														description={project.priority}
														header='Priority'
													/>
													<List.Item
														description={
															project.createdBy &&
															project.createdBy.firstName
														}
														header='createdby'
													/>
												</List>
											</Segment>
										</Grid.Column>
									</Grid.Row>
									<Grid.Row>
										<Grid.Column width={8}>
											<Segment>
												<Label
													attached='top'
													size='large'
													content='Developers'
												/>
												{project.asignedDevs.map((dev) => (
													<List size='large' animated key={dev._id}>
														<List.Item>
															<Image
																avatar
																src='https://react.semantic-ui.com/images/avatar/small/rachel.png'
															/>
															<List.Content>
																<List.Header as='a'>
																	{dev.firstName + ' ' + dev.lastName}
																</List.Header>
																<List.Description>
																	{dev.email}
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
