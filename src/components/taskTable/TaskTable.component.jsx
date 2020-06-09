import React, { Fragment } from 'react';
import { Table, Label, Checkbox } from 'semantic-ui-react';
import { SearchAndTable } from '../search&table/search&table.component';
import LinkButton from '../create-button/create-button.component';

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
					return '#fbbd08';
				case 'high':
					return '#FF6361';
				default:
					return '#51C63E';
			}
		},
		displayData: function (tasks = allTasks) {
			return tasks.map((tasks) => {
				return (
					<Table.Row key={tasks._id}>
						<Table.Cell>{tasks.name}</Table.Cell>
						<Table.Cell>{tasks.category}</Table.Cell>
						<Table.Cell>
							<Label color='blue'>{tasks.status}</Label>
						</Table.Cell>
						<Table.Cell>
							<Label
								style={{
									backgroundColor: this.handleLabel(tasks),
									color: 'white',
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
								{new Date(tasks.createdDate).toDateString()}
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
			tableData.labels.push('Created', 'Detail');
			break;
		case 'projectDetails':
			tableData.labels.push('Created');
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
