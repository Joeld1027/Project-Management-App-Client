import React, { Suspense } from 'react';
import { Table, Progress } from 'semantic-ui-react';
import { SearchAndTable } from '../search&table/search&table.component';
import LinkButton from '../create-button/create-button.component';
import { useRouteMatch } from 'react-router-dom';

export default function MyProjectsPanel(props) {
	let { url } = useRouteMatch();
	const tableData = {
		labels: ['Project', 'Progress', 'Created', 'Details'],
		data: props.projects,
		displayData: function (projects = props.projects) {
			return projects.map((project) => {
				return (
					<Table.Row key={project.id} verticalAlign='top'>
						<Table.Cell>{project.name}</Table.Cell>
						<Table.Cell>
							<Progress
								color='green'
								value='4'
								total='5'
								progress='percent'
							/>
						</Table.Cell>
						<Table.Cell>{project.createdDate}</Table.Cell>
						<Table.Cell textAlign='center'>
							<LinkButton
								noSegment
								typeAs='h4'
								icon='edit'
								disabled={true}
								id={project.id}
								url={`${url}/${project.id}`}
							/>
						</Table.Cell>
					</Table.Row>
				);
			});
		},
	};

	return (
		<div>
			<Suspense fallback={<h1>Loading....</h1>}>
				<SearchAndTable tableData={tableData} />
			</Suspense>
		</div>
	);
}
