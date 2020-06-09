import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import {
	Header,
	Table,
	Icon,
	Container,
	Select,
} from 'semantic-ui-react';
import LinkButton from '../../components/create-button/create-button.component';
import { UsersPageContainer } from './user-page.styles';
import { SearchAndTable } from '../../components/search&table/search&table.component';
import { useRouteMatch } from 'react-router-dom';
import { updateUserInfo } from '../../redux/user/user.actions';

const UsersPage = ({ users, updateUserInfo, isLoading }) => {
	const [role, setRole] = useState({
		role: '',
		id: '',
	});
	useEffect(() => {
		let setUserRole = async () => {
			if (role.role.length > 0) updateUserInfo(role);
		};
		setUserRole();
	}, [role]);
	const roleOptions = [
		{
			key: 'Demo-Submitter',
			value: 'Demo-Submitter',
			text: 'Demo-Submitter',
		},
		{
			key: 'Demo-Developer',
			value: 'Demo-Developer',
			text: 'Demo-Developer',
		},
		{
			key: 'Demo-Manager',
			value: 'Demo-Manager',
			text: 'Demo-Manager',
		},
		{ key: 'Demo-Admin', value: 'Demo-Admin', text: 'Demo-Admin' },
		{ key: 'Admin', value: 'Admin', text: 'Admin' },
	];
	let { url } = useRouteMatch();

	const handleChange = (event, { value, id }) => {
		setRole({
			role: value,
			id,
		});
		console.log(role);
	};

	const tableData = {
		labels: ['Name', 'Date Joined', 'E-mail', 'Role', 'Actions'],
		data: users,
		displayData: function (usersArr = users) {
			return usersArr.map((user) => {
				return (
					<Table.Row key={user._id}>
						<Table.Cell>{user.name}</Table.Cell>
						<Table.Cell>
							{new Date(user.userSince).toDateString()}
						</Table.Cell>
						<Table.Cell>{user.email}</Table.Cell>
						<Table.Cell>
							<Select
								loading={isLoading}
								id={user._id}
								onChange={handleChange}
								placeholder={user.role}
								options={roleOptions}
							/>
						</Table.Cell>
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
					<Header.Content>Manage Users Roles</Header.Content>
				</Header>
				<SearchAndTable tableData={tableData} />
			</Container>
		</UsersPageContainer>
	);
};

const mapStateToProps = (state) => ({
	users: state.user.allUsers,
	isLoading: state.user.isLoading,
});

export default connect(mapStateToProps, { updateUserInfo })(
	UsersPage
);
