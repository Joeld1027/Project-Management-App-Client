import React, { Fragment } from 'react';
import { Table, Label, Checkbox } from 'semantic-ui-react';
import { SearchAndTable } from '../search&table/search&table.component';
import LinkButton from '../Link-Button/create-button.component';

export const TaskTable = ({
	allTasks,
	url,
	usefor,
	handleToggle,
	setcontent,
	setsubheader,
	striped,
	ifchecked,
}) => {
	const tableData = {
		labels: ['Name', 'Category', 'Status', 'Priority'],
		data: allTasks,
		handleLabel: (action) => {
			switch (action.priority) {
				case 'medium':
					return '#FF7400';
				case 'high':
					return '#E1005B';
				default:
					return '#007979';
			}
		},
		displayData: function (tasks = allTasks) {
			return tasks.map((tasks) => {
				return (
					<Table.Row
						key={tasks._id}
						warning={
							tasks.priority === 'high' && tasks.status !== 'Resolved'
								? true
								: false
						}
					>
						<Table.Cell>{tasks.name}</Table.Cell>
						<Table.Cell>{tasks.category}</Table.Cell>
						<Table.Cell>
							<Label basic color='teal'>
								{tasks.status}
							</Label>
						</Table.Cell>
						<Table.Cell>
							<Label
								style={{
									color: 'white',
									backgroundColor: this.handleLabel(tasks),
								}}
							>
								{tasks.priority}
							</Label>
						</Table.Cell>
						{usefor === 'mainTable' ? (
							<Fragment>
								<Table.Cell>
									{new Date(tasks.createdDate).toDateString()}
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
							</Fragment>
						) : usefor === 'projectDetails' ? (
							<Table.Cell>
								<LinkButton
									noSegment
									typeAs='h4'
									icon='edit'
									disabled={true}
									url={`/user/tasks/details/${tasks._id}`}
								/>
							</Table.Cell>
						) : usefor === 'projectForm' ? (
							<Table.Cell>
								<Checkbox
									checked={
										ifchecked.addTasks.includes(tasks._id)
											? true
											: false
									}
									toggle
									value={tasks._id}
									name='addTasks'
									onChange={handleToggle}
								/>
							</Table.Cell>
						) : null}
					</Table.Row>
				);
			});
		},
	};
	switch (usefor) {
		case 'mainTable':
			tableData.labels.push('Created', 'Details');
			break;
		case 'projectDetails':
			tableData.labels.push('Details');
			break;
		case 'projectForm':
			tableData.labels.push('ADD');
			break;
		default:
			break;
	}

	return (
		<div>
			{allTasks && (
				<SearchAndTable
					striped={striped}
					setsubheader={setsubheader}
					setcontent={setcontent}
					tableData={tableData}
				/>
			)}
		</div>
	);
};
