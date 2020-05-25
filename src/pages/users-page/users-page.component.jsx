import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getAllUsers } from '../../redux/user/user.actions';
import {
	Header,
	Table,
	Icon,
	Container,
	Dropdown,
} from 'semantic-ui-react';
import { UsersPageContainer } from './user-page.styles';
import { SearchAndTable } from '../../components/search&table/search&table.component';

const UsersPage = ({ getAllUsers, allUsers }) => {
	useEffect(() => {
		getAllUsers();
	}, [getAllUsers]);
	const { users } = allUsers;

	const tableData = {
		labels: ['Name', 'Date Joined', 'E-mail', 'Role', 'Actions'],
		data: users,
		displayData: function (usersArr = users) {
			return usersArr.map((user) => {
				return (
					<Table.Row key={user.id}>
						<Table.Cell>{user.name}</Table.Cell>
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
			});
		},
	};

	return (
		<UsersPageContainer>
			<Container>
				<Header as='h2' icon textAlign='center'>
					<Icon name='users' circular />
					<Header.Content>Manage Users</Header.Content>
				</Header>
				<SearchAndTable tableData={tableData} />
			</Container>
		</UsersPageContainer>
	);
};

const mapStateToProps = (state) => ({
	allUsers: state.user.allUsers,
});

export default connect(mapStateToProps, { getAllUsers })(UsersPage);
