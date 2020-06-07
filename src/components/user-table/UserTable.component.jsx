import React from 'react';
import { Table, Checkbox, Header, Image } from 'semantic-ui-react';
import { SearchAndTable } from '../search&table/search&table.component';

export const UserTable = ({
	users,
	istoggle,
	setcontent,
	handleToggle,
	setsubheader,
	ifchecked,
}) => {
	const userData = {
		labels: ['Employee', 'Email'],
		data: users,
		displayData: function (usersData = users) {
			return usersData.map((user) => {
				return (
					<Table.Row key={user._id} verticalAlign='top'>
						<Table.Cell>
							<Header as='h4' image>
								<Image
									src='https://react.semantic-ui.com/images/avatar/small/lena.png'
									rounded
									size='mini'
								/>
								<Header.Content>
									{user.name}
									<Header.Subheader>{user.role}</Header.Subheader>
								</Header.Content>
							</Header>
						</Table.Cell>
						<Table.Cell>{user.email}</Table.Cell>
						<Table.Cell>
							{istoggle ? (
								<Checkbox
									onChange={handleToggle}
									checked={
										ifchecked.addDevelopers.includes(user._id)
											? true
											: false
									}
									toggle
									value={user._id}
									name='addDevelopers'
								/>
							) : (
								user.role
							)}
						</Table.Cell>
					</Table.Row>
				);
			});
		},
	};
	istoggle
		? userData.labels.push('Add')
		: userData.labels.push('Role');
	return (
		<div>
			<SearchAndTable
				setsubheader={setsubheader}
				setcontent={setcontent}
				tableData={userData}
			/>
		</div>
	);
};
