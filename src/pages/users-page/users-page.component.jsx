import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getAllUsers } from '../../redux/user/user.actions';
import {
	Header,
	Grid,
	Table,
	Segment,
	Icon,
	Container,
	Dropdown,
} from 'semantic-ui-react';
import { UsersPageContainer } from './user-page.styles';

function UsersPage({ getAllUsers, allUsers }) {
	useEffect(() => {
		getAllUsers();
	}, [getAllUsers]);
	const { users } = allUsers;
	return (
		<UsersPageContainer>
			<Container>
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
										<Table.HeaderCell>Role</Table.HeaderCell>
										<Table.HeaderCell>Actions</Table.HeaderCell>
									</Table.Row>
								</Table.Header>
								<Table.Body>
									{users &&
										users.map((user) => {
											return (
												<Table.Row key={user.id}>
													<Table.Cell>{`${user.name} ${user.lastName}`}</Table.Cell>
													<Table.Cell>
														{new Date(user.userSince).toDateString()}
													</Table.Cell>
													<Table.Cell>{user.email}</Table.Cell>
													<Table.Cell>{user.role}</Table.Cell>
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
										})}
								</Table.Body>
							</Table>
						</Segment>
					</Grid.Column>
				</Grid>
			</Container>
		</UsersPageContainer>
	);
}

const mapStateToProps = (state) => ({
	allUsers: state.user.allUsers,
});

export default connect(mapStateToProps, { getAllUsers })(UsersPage);
