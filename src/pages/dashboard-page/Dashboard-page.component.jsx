import React from 'react';
import { Link } from 'react-router-dom';
import {
	Card,
	Statistic,
	Container,
	Header,
	Icon,
	Segment,
	Grid,
	Label,
	List,
} from 'semantic-ui-react';
import { DashboardContainer } from './dashboard-page.styles';
import { ProjectBarChart } from '../../components/dataCharts/projectBarChart.component';
import { TaskHorizontalBar } from '../../components/dataCharts/TaskHorizontalBar.component';

const Dashboard = (props) => {
	console.log(props);
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
				<Card.Group
					itemsPerRow={4}
					centered
					stackable
					textAlign='center'
					doubling
				>
					<Card>
						<Statistic size='large'>
							<Label
								style={{
									backgroundColor: 'rgba(0,0,0,0.3)',
									color: 'white',
								}}
								attached='bottom'
							>
								Pending Tasks
							</Label>
							<Statistic.Value>4</Statistic.Value>
						</Statistic>
					</Card>
					<Card>
						<Statistic color='teal' size='large'>
							<Label attached='bottom' color='teal'>
								Tasks In progress
							</Label>
							<Statistic.Value>7</Statistic.Value>
						</Statistic>
					</Card>
					<Card>
						<Statistic size='large'>
							<Label
								style={{ backgroundColor: '#00686D', color: 'white' }}
								attached='bottom'
							>
								Tasks Resolved
							</Label>
							<Statistic.Value>9</Statistic.Value>
						</Statistic>
					</Card>
				</Card.Group>
				<Grid stackable>
					<Grid.Row stretched>
						<Grid.Column width={10}>
							<Segment>
								<ProjectBarChart />
							</Segment>
						</Grid.Column>

						<Grid.Column width={6}>
							<Segment>
								<Header
									textAlign='center'
									content='You are assigned to: #projects'
								/>
								<List divided relaxed animated>
									<List.Item>
										<List.Icon
											name='server'
											size='large'
											verticalAlign='middle'
										/>
										<List.Content>
											<Link to='/user/projects/5edfd6cbc0e46961f8fd4de8'>
												<List.Header>Testing the link</List.Header>
											</Link>
											<List.Description as='a'>
												Updated 10 mins ago
											</List.Description>
										</List.Content>
									</List.Item>
								</List>
							</Segment>
						</Grid.Column>
					</Grid.Row>

					<Grid.Row stretched>
						<Grid.Column width={6}>
							<Segment>
								<Header textAlign='center' content='List of Tasks' />
								<List divided relaxed animated>
									<List.Item>
										<List.Icon
											name='tasks'
											size='large'
											verticalAlign='middle'
										/>
										<List.Content>
											<List.Header as='a'>
												Semantic-Org/Semantic-UI
											</List.Header>
											<List.Description as='a'>
												Updated 10 mins ago
											</List.Description>
										</List.Content>
									</List.Item>
								</List>
							</Segment>
						</Grid.Column>
						<Grid.Column width={10}>
							<Segment>
								<TaskHorizontalBar />
							</Segment>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</Container>
		</DashboardContainer>
	);
};

export default Dashboard;
