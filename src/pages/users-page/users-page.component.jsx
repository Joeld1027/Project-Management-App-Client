import React from 'react';
import {
	Header,
	Grid,
	Table,
	Segment,
	Icon,
} from 'semantic-ui-react';
import { UsersPageContainer } from './user-page.styles';

function UsersPage() {
	return (
		<UsersPageContainer>
			<Header as='h2' icon textAlign='center'>
				<Icon name='users' circular />
				<Header.Content>Manage Users</Header.Content>
			</Header>
			<Grid>
				<Grid.Column>
					<Segment>
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
					</Segment>
				</Grid.Column>
			</Grid>
		</UsersPageContainer>
	);
}
export default UsersPage;
