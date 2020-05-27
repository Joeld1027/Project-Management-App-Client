import React from 'react';
import { useHistory } from 'react-router-dom';
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

export const ProjectDetails = (props) => {
	console.log(props);
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
			<Container>
				<Segment color='teal' size='mini'>
					<Segment padded>
						<Grid>
							<Grid.Row>
								<Grid.Column width={8}>
									<Item.Group>
										<Item>
											<Item.Content>
												<Item.Header>Project Name</Item.Header>
												<Item.Meta>
													<span className='price'>Progress 80%</span>
												</Item.Meta>
												<Item.Description>
													description
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
												description='00/00/0000'
											/>
											<List.Item
												header='Deadline'
												description='00/00/0000'
											/>
										</List>
										<List size='large'>
											<List.Item
												description='jhon'
												header='createdby'
											/>
											<List.Item
												description='priority'
												header='Priority'
											/>
										</List>
									</Segment>
								</Grid.Column>
							</Grid.Row>
							<Grid.Row>
								<Grid.Column width={10}>
									<Segment>
										<Label
											attached='top'
											size='large'
											content='Developers'
										/>

										<List size='large'>
											<List.Item>
												<Image
													avatar
													src='https://react.semantic-ui.com/images/avatar/small/rachel.png'
												/>
												<List.Content>
													<List.Header as='a'>Rachel</List.Header>
													<List.Description>
														Last seen watching{' '}
														<a>
															<b>Arrested Development</b>
														</a>{' '}
														just now.
													</List.Description>
												</List.Content>
											</List.Item>
										</List>
									</Segment>
								</Grid.Column>
								<Grid.Column width={6}>
									<Segment>
										<Label attached='top'>HTML</Label>
									</Segment>
								</Grid.Column>
							</Grid.Row>
						</Grid>
					</Segment>
				</Segment>
			</Container>
		</div>
	);
};
