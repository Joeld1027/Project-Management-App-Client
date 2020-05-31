import React, { Suspense } from 'react';
import { Container, Table, Label, Header } from 'semantic-ui-react';

import { connect } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { TicketsPageContainer } from './Tickets-page.styles';
import LinkButton from '../../components/create-button/create-button.component';
import { SearchAndTable } from '../../components/search&table/search&table.component';

const TicketsPage = ({ allTickets }) => {
	const tableData = {
		labels: [
			'Name',
			'Created',
			'Category',
			'Status',
			'Priority',
			'Details',
		],
		data: allTickets,
		handleLabel: (action) => {
			switch (action.priority) {
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
							<LinkButton
								noSegment
								typeAs='h4'
								icon='edit'
								disabled={true}
								url={`${url}/${ticket.id}`}
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
					<LinkButton
						label='Create Ticket'
						url={`${url}/new`}
						icon='plus'
						typeAs='h2'
					/>
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

export default connect(mapStateToProps)(TicketsPage);
