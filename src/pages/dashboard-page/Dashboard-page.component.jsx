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
	Table,
} from 'semantic-ui-react';

const Dashboard = () => {
	return (
		<Container>
			<Header as='h1' icon dividing textAlign='center'>
				DASHBOARD
				<Icon name='chart bar' />
				<Header.Subheader>
					Tickets and Projects overview.
				</Header.Subheader>
			</Header>
			<Card.Group itemsPerRow={4} centered fluid>
				<Card href='#card-example-link-card' color='green'>
					<Statistic color='green' size='large'>
						<Label color='green' ribbon>
							New Tickets
						</Label>
						<Statistic.Value>4</Statistic.Value>
					</Statistic>
				</Card>
				<Card href='#card-example-link-card' color='teal'>
					<Statistic color='teal' size='large'>
						<Label ribbon color='teal'>
							Tickets In progress
						</Label>
						<Statistic.Value>7</Statistic.Value>
					</Statistic>
				</Card>
				<Card href='#card-example-link-card' color='purple'>
					<Statistic color='purple' size='large'>
						<Label ribbon color='purple'>
							Tickets Resolved
						</Label>
						<Statistic.Value>9</Statistic.Value>
					</Statistic>
				</Card>
			</Card.Group>
			<Grid celled>
				<Grid.Row stretched>
					<Grid.Column width={10}>
						<Segment loading>
							<Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
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
			<Table striped>
				<Table.Header>
					<Table.Row>
						<Table.HeaderCell>Name</Table.HeaderCell>
						<Table.HeaderCell>Date Joined</Table.HeaderCell>
						<Table.HeaderCell>E-mail</Table.HeaderCell>
						<Table.HeaderCell>Called</Table.HeaderCell>
					</Table.Row>
				</Table.Header>

				<Table.Body>
					<Table.Row>
						<Table.Cell>John Lilki</Table.Cell>
						<Table.Cell>September 14, 2013</Table.Cell>
						<Table.Cell>jhlilk22@yahoo.com</Table.Cell>
						<Table.Cell>No</Table.Cell>
					</Table.Row>
					<Table.Row>
						<Table.Cell>Jamie Harington</Table.Cell>
						<Table.Cell>January 11, 2014</Table.Cell>
						<Table.Cell>jamieharingonton@yahoo.com</Table.Cell>
						<Table.Cell>Yes</Table.Cell>
					</Table.Row>
					<Table.Row>
						<Table.Cell>Jill Lewis</Table.Cell>
						<Table.Cell>May 11, 2014</Table.Cell>
						<Table.Cell>jilsewris22@yahoo.com</Table.Cell>
						<Table.Cell>Yes</Table.Cell>
					</Table.Row>
					<Table.Row>
						<Table.Cell>John Lilki</Table.Cell>
						<Table.Cell>September 14, 2013</Table.Cell>
						<Table.Cell>jhlilk22@yahoo.com</Table.Cell>
						<Table.Cell>No</Table.Cell>
					</Table.Row>
					<Table.Row>
						<Table.Cell>John Lilki</Table.Cell>
						<Table.Cell>September 14, 2013</Table.Cell>
						<Table.Cell>jhlilk22@yahoo.com</Table.Cell>
						<Table.Cell>No</Table.Cell>
					</Table.Row>
					<Table.Row>
						<Table.Cell>Jamie Harington</Table.Cell>
						<Table.Cell>January 11, 2014</Table.Cell>
						<Table.Cell>jamieharingonton@yahoo.com</Table.Cell>
						<Table.Cell>Yes</Table.Cell>
					</Table.Row>
					<Table.Row>
						<Table.Cell>Jill Lewis</Table.Cell>
						<Table.Cell>May 11, 2014</Table.Cell>
						<Table.Cell>jilsewris22@yahoo.com</Table.Cell>
						<Table.Cell>Yes</Table.Cell>
					</Table.Row>
					<Table.Row>
						<Table.Cell>John Lilki</Table.Cell>
						<Table.Cell>September 14, 2013</Table.Cell>
						<Table.Cell>jhlilk22@yahoo.com</Table.Cell>
						<Table.Cell>No</Table.Cell>
					</Table.Row>
				</Table.Body>
			</Table>
		</Container>
	);
};

export default Dashboard;
