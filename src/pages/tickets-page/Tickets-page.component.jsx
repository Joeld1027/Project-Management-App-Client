import React, { useEffect, Suspense } from 'react';
import {
	Container,
	Table,
	Label,
	Dropdown,
	Header,
} from 'semantic-ui-react';
import { getAllTickets } from '../../redux/tickets/tickets.actions';
import { connect } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { TicketsPageContainer } from './Tickets-page.styles';
import CreateButton from '../../components/create-button/create-button.component';
import { SearchAndTable } from '../../components/search&table/search&table.component';

const TicketsPage = ({ allTickets, getAllTickets }) => {
	useEffect(() => {
		getAllTickets();
	}, [getAllTickets]);
	const tableData = {
		labels: [
			'Name',
			'Created',
			'Category',
			'Status',
			'Priority',
			'Actions',
		],
		data: allTickets,
		handleLabel: (action) => {
			switch (action.ticketPriority) {
				case 'medium':
					return 'yellow';
				case 'high':
					return 'red';
				default:
					return 'green';
			}
		},
		displayData: function (tickets = allTickets) {
			return tickets.map((ticket) => {
				return (
					<Table.Row key={ticket.id}>
						<Table.Cell>{ticket.name}</Table.Cell>
						<Table.Cell>
							{new Date(ticket.createdDate).toDateString()}
						</Table.Cell>
						<Table.Cell>{ticket.category}</Table.Cell>
						<Table.Cell>
							<Label color='blue'>{ticket.status}</Label>
						</Table.Cell>
						<Table.Cell>
							<Label color={this.handleLabel(ticket)}>
								{ticket.priority}
							</Label>
						</Table.Cell>
						<Table.Cell>
							<Dropdown
								as='h2'
								text='...'
								options={[
									{ key: 1, text: 'Details', value: 1 },
									{ key: 2, text: 'Edit', value: 2 },
									{ key: 3, text: 'Delete', value: 3 },
								]}
								pointing='left'
								icon={null}
							/>
						</Table.Cell>
					</Table.Row>
				);
			});
		},
	};

	let { url } = useRouteMatch();

	return (
		<Suspense fallback={<div>Loading...</div>}>
			<TicketsPageContainer>
				<Container>
					<CreateButton label='Ticket' url={url} />
					<Header
						as='h2'
						icon='wpforms'
						content='All Active Tickets'
						color='teal'
						textAlign='center'
					/>
					<SearchAndTable tableData={tableData} />
				</Container>
			</TicketsPageContainer>
		</Suspense>
	);
};

const mapStateToProps = (state) => {
	return {
		allTickets: state.tickets.allTickets,
	};
};

export default connect(mapStateToProps, { getAllTickets })(
	TicketsPage
);
