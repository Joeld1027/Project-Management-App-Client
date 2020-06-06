import React from 'react';
import { Table, Checkbox } from 'semantic-ui-react';
import { SearchAndTable } from '../search&table/search&table.component';

export const UserTable = ({
	users,
	istoggle,
	setcontent,
	handleToggle,
	setsubheader,
	toggleType,
}) => {
	const userData = {
		labels: ['DEVELOPER', 'E-MAIL'],
		data: users,
		displayData: function (usersData = users) {
			return usersData.map((user) => {
				return (
					<Table.Row key={user._id} verticalAlign='top'>
						<Table.Cell>{user.name}</Table.Cell>
						<Table.Cell>{user.email}</Table.Cell>
						<Table.Cell>
							{istoggle ? (
								<Checkbox
									onChange={handleToggle}
									toggle
									value={user._id}
									name={toggleType ? 'addDevelopers' : 'developers'}
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
		? userData.labels.push('ADD')
		: userData.labels.push('ROLE');
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
