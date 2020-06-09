import React from 'react';

import {
	Card,
	Statistic,
	Container,
	Header,
	Icon,
	Segment,
	Image,
	Grid,
	Label,
} from 'semantic-ui-react';
import { DashboardContainer } from './dashboard-page.styles';
import { ProjectBarChart } from '../../components/dataCharts/projectBarChart.component';

const Dashboard = () => {
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
				<Card.Group itemsPerRow={4} centered stackable>
					<Card color='green'>
						<Statistic color='green' size='large'>
							<Label color='green' attached='top'>
								New Tasks
							</Label>
							<Statistic.Value>4</Statistic.Value>
						</Statistic>
					</Card>
					<Card color='teal'>
						<Statistic color='teal' size='large'>
							<Label attached='top' color='teal'>
								Tasks In progress
							</Label>
							<Statistic.Value>7</Statistic.Value>
						</Statistic>
					</Card>
					<Card color='purple'>
						<Statistic color='purple' size='large'>
							<Label attached='top' color='purple'>
								Tasks Resolved
							</Label>
							<Statistic.Value>9</Statistic.Value>
						</Statistic>
					</Card>
				</Card.Group>
				<Grid celled>
					<Grid.Row stretched>
						<Grid.Column width={10}>
							<Segment>
								<ProjectBarChart />
							</Segment>
						</Grid.Column>
						<Grid.Column width={6}>
							<Segment loading>
								<Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
							</Segment>
						</Grid.Column>
					</Grid.Row>

					<Grid.Row stretched>
						<Grid.Column width={6}>
							<Segment loading>
								<Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
							</Segment>
						</Grid.Column>
						<Grid.Column width={10}>
							<Segment loading>
								<Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
							</Segment>
						</Grid.Column>
					</Grid.Row>
				</Grid>
				00
			</Container>
		</DashboardContainer>
	);
};

export default Dashboard;
