import React from 'react';
import { Table, Progress, Dropdown } from 'semantic-ui-react';
import { SearchAndTable } from '../search&table/search&table.component';

export default function MyProjectsPanel(props) {
	const tableData = {
		labels: ['Project', 'Progress', 'Created', 'Actions'],
		data: props.projects,
		displayData: function (projects = props.projects) {
			return projects.map((project) => {
				return (
					<Table.Row key={project.id} verticalAlign='top'>
						<Table.Cell>{project.name}</Table.Cell>
						<Table.Cell as='td' className='bottom aligned'>
							<Progress
								color='green'
								value='4'
								total='5'
								progress='percent'
								size='small'
							/>
						</Table.Cell>
						<Table.Cell>{project.createdDate}</Table.Cell>
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
		<div>
			<SearchAndTable tableData={tableData} />
		</div>
	);
}
