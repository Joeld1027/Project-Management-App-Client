import React from 'react';
import { connect } from 'react-redux';
import { Header, Table, Icon, Container } from 'semantic-ui-react';
import LinkButton from '../../components/create-button/create-button.component';
import { UsersPageContainer } from './user-page.styles';
import { SearchAndTable } from '../../components/search&table/search&table.component';
import { useRouteMatch } from 'react-router-dom';

const UsersPage = ({ allUsers }) => {
	const { users } = allUsers;
	let { url } = useRouteMatch();

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
							<LinkButton
								noSegment
								typeAs='h4'
								icon='edit'
								disabled={true}
								id={user.id}
								url={`${url}/${user.id}`}
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

export default connect(mapStateToProps)(UsersPage);
