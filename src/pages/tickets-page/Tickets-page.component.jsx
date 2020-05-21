import React, { useEffect } from 'react';
import {
	Grid,
	Image,
	Container,
	Table,
	Label,
	Menu,
	Icon,
	Divider,
	Header,
	Input,
	Segment,
} from 'semantic-ui-react';
import {
	selectCurrentUserTickets,
	selectAllTickets,
} from '../../redux/tickets/tickets.selectors';
import { createStructuredSelector } from 'reselect';
import { getAllTickets } from '../../redux/tickets/tickets.actions';
import { connect } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { TicketsPageContainer } from './Tickets-page.styles';
import CreateButton from '../../components/create-button/create-button.component';

const TicketsPage = ({ allTickets, getAllTickets }) => {
	useEffect(() => {
		getAllTickets();
	}, [getAllTickets]);
	console.log(allTickets);
	let { url } = useRouteMatch();
	return (
		<TicketsPageContainer>
			<Container>
				<CreateButton label='Ticket' url={url} />
				<Grid>
					<Grid.Column width={12}>
						<Segment>
							<Header as='h2' color='teal'>
								<Icon name='wpforms' />
								<Header.Content>Submitted Tickets</Header.Content>
							</Header>

							<Table celled color='teal'>
								<Table.Header>
									<Table.Row>
										<Table.HeaderCell>Header</Table.HeaderCell>
										<Table.HeaderCell>Header</Table.HeaderCell>
										<Table.HeaderCell>Header</Table.HeaderCell>
									</Table.Row>
								</Table.Header>

								<Table.Body>
									<Table.Row>
										<Table.Cell>
											<Label ribbon>First</Label>
										</Table.Cell>
										<Table.Cell>Cell</Table.Cell>
										<Table.Cell>Cell</Table.Cell>
									</Table.Row>
									<Table.Row>
										<Table.Cell>Cell</Table.Cell>
										<Table.Cell>Cell</Table.Cell>
										<Table.Cell>Cell</Table.Cell>
									</Table.Row>
									<Table.Row>
										<Table.Cell>Cell</Table.Cell>
										<Table.Cell>Cell</Table.Cell>
										<Table.Cell>Cell</Table.Cell>
									</Table.Row>
								</Table.Body>

								<Table.Footer>
									<Table.Row>
										<Table.HeaderCell colSpan='3'>
											<Menu floated='right' pagination>
												<Menu.Item as='a' icon>
													<Icon name='chevron left' />
												</Menu.Item>
												<Menu.Item as='a'>1</Menu.Item>
												<Menu.Item as='a'>2</Menu.Item>
												<Menu.Item as='a'>3</Menu.Item>
												<Menu.Item as='a'>4</Menu.Item>
												<Menu.Item as='a' icon>
													<Icon name='chevron right' />
												</Menu.Item>
											</Menu>
										</Table.HeaderCell>
									</Table.Row>
								</Table.Footer>
							</Table>
						</Segment>
					</Grid.Column>
					<Grid.Column width={4}>
						<Segment>
							<Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
						</Segment>
					</Grid.Column>
				</Grid>
				<Divider />
				<Segment>
					<Grid>
						<Grid.Column>
							<Header
								as='h2'
								icon='wpforms'
								content='All Active Tickets'
								color='teal'
								textAlign='center'
							/>

							<Input
								icon='file alternate outline'
								iconPosition='left'
								placeholder='Search tickets...'
								type='text'
							/>

							<Table striped color='teal'>
								<Table.Header>
									<Table.Row>
										<Table.HeaderCell>Name</Table.HeaderCell>
										<Table.HeaderCell>Date created</Table.HeaderCell>
										<Table.HeaderCell>Category</Table.HeaderCell>
										<Table.HeaderCell>Status</Table.HeaderCell>
										<Table.HeaderCell>Priority</Table.HeaderCell>
									</Table.Row>
								</Table.Header>

								<Table.Body>
									{allTickets.map((ticket) => {
										return (
											<Table.Row key={ticket._id}>
												<Table.Cell>{ticket.ticketName}</Table.Cell>
												<Table.Cell>
													{new Date(
														ticket.createdDate
													).toDateString()}
												</Table.Cell>
												<Table.Cell>
													{ticket.ticketCategory}
												</Table.Cell>
												<Table.Cell>{ticket.ticketStatus}</Table.Cell>
												<Table.Cell>
													{ticket.ticketPriority}
												</Table.Cell>
											</Table.Row>
										);
									})}
								</Table.Body>
							</Table>
						</Grid.Column>
					</Grid>
				</Segment>
			</Container>
		</TicketsPageContainer>
	);
};

const mapStateToProps = createStructuredSelector({
	allTickets: selectAllTickets,
});

export default connect(mapStateToProps, { getAllTickets })(
	TicketsPage
);
