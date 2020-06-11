import React from 'react';
import { Link } from 'react-router-dom';
import {
	Container,
	Header,
	Icon,
	Segment,
	Grid,
	List,
} from 'semantic-ui-react';
import { DashboardContainer } from './dashboard-page.styles';
import { ProjectBarChart } from '../../components/dataCharts/projectBarChart.component';
import { DoughnutChart } from '../../components/dataCharts/TaskPriorityChart.component';
import StatusDoughnutChart from '../../components/dataCharts/StatusDoughnutChart.component';

const Dashboard = ({ currentProjects, currentTasks }) => {
	return (
		<DashboardContainer>
			<Container>
				<Header as='h1' icon dividing textAlign='center'>
					DASHBOARD
					<Icon name='chart bar' />
					<Header.Subheader>
						Tasks and Projects overview.
					</Header.Subheader>
				</Header>
				<StatusDoughnutChart currentTasks={currentTasks} />
				<Grid stackable>
					<Grid.Row centered>
						<Grid.Column textAlign='center' width={10}>
							<Segment padded>
								<ProjectBarChart projects={currentProjects} />
							</Segment>
						</Grid.Column>
						<Grid.Column stretched width={6}>
							<Segment>
								<Header textAlign='center' content='Your Projects' />
								<List divided relaxed animated>
									{currentProjects.map((project) => (
										<List.Item key={project._id}>
											<List.Icon
												name='server'
												size='large'
												verticalAlign='middle'
											/>
											<List.Content>
												<Link to={`/user/projects/${project._id}`}>
													<List.Header>{project.name}</List.Header>
												</Link>
												<List.Description as='a'>
													{project.description}
												</List.Description>
											</List.Content>
										</List.Item>
									))}
								</List>
							</Segment>
						</Grid.Column>
					</Grid.Row>

					<Grid.Row stretched>
						<Grid.Column width={6}>
							<Segment>
								<Header textAlign='center' content='Your Projects' />
								<List divided relaxed animated>
									{currentProjects.map((project) => (
										<List.Item key={project._id}>
											<List.Icon
												name='server'
												size='large'
												verticalAlign='middle'
											/>
											<List.Content>
												<Link to={`/user/projects/${project._id}`}>
													<List.Header>{project.name}</List.Header>
												</Link>
												<List.Description as='a'>
													{project.description}
												</List.Description>
											</List.Content>
										</List.Item>
									))}
								</List>
							</Segment>
						</Grid.Column>
						<Grid.Column width={10}>
							<Segment>
								<DoughnutChart
									projectTasks={currentTasks}
									horizontal
								/>
							</Segment>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</Container>
		</DashboardContainer>
	);
};

export default Dashboard;
