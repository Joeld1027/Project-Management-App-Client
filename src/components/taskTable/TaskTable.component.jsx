import React from 'react';
import { Table, Label } from 'semantic-ui-react';
import { SearchAndTable } from '../search&table/search&table.component';
import LinkButton from '../create-button/create-button.component';

export const TaskTable = ({ allTasks, url }) => {
	const tableData = {
		labels: [
			'Name',
			'Created',
			'Category',
			'Status',
			'Priority',
			'Details',
		],
		data: allTasks.tasks,
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
		displayData: function (tasks = allTasks) {
			return tasks.map((tasks) => {
				return (
					<Table.Row key={tasks._id}>
						<Table.Cell>{tasks.name}</Table.Cell>
						<Table.Cell>
							{new Date(tasks.createdDate).toDateString()}
						</Table.Cell>
						<Table.Cell>{tasks.category}</Table.Cell>
						<Table.Cell>
							<Label color='blue'>{tasks.status}</Label>
						</Table.Cell>
						<Table.Cell>
							<Label color={this.handleLabel(tasks)}>
								{tasks.priority}
							</Label>
						</Table.Cell>
						<Table.Cell>
							<LinkButton
								noSegment
								typeAs='h4'
								icon='edit'
								disabled={true}
								url={`${url}/details/${tasks._id}`}
							/>
						</Table.Cell>
					</Table.Row>
				);
			});
		},
	};

	return (
		<div>
			{allTasks.tasks && <SearchAndTable tableData={tableData} />}
		</div>
	);
};
