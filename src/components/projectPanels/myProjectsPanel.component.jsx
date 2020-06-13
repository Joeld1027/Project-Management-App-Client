import React, { Suspense } from 'react';
import { Table, Progress } from 'semantic-ui-react';
import { SearchAndTable } from '../search&table/search&table.component';
import LinkButton from '../Link-Button/create-button.component';
import { useRouteMatch } from 'react-router-dom';

export default function MyProjectsPanel(props) {
	let { url } = useRouteMatch();
	const tableData = {
		getResolvedTasksPercent: function (project) {
			let countTask =
				(project.projectTasks.filter(
					(task) => task.status === 'Resolved'
				).length /
					project.projectTasks.length) *
				100;

			return countTask;
		},
		labels: ['Project', 'Progress', 'Created', 'Deadline', 'Details'],
		data: props.projects,
		displayData: function (projects = props.projects) {
			return projects.map((project) => {
				return (
					<Table.Row key={project._id} verticalAlign='top'>
						<Table.Cell>{project.name}</Table.Cell>
						<Table.Cell width={4}>
							<Progress
								label={
									project.projectTasks.length === 0
										? 0 + '%'
										: `${this.getResolvedTasksPercent(
												project
										  ).toFixed(1)}%`
								}
								indicating
								color='green'
								percent={this.getResolvedTasksPercent(project)}
							/>
						</Table.Cell>
						<Table.Cell>
							{new Date(project.created).toDateString()}
						</Table.Cell>
						<Table.Cell>
							{new Date(project.deadline).toDateString()}
						</Table.Cell>
						<Table.Cell>
							<LinkButton
								noSegment
								typeAs='h4'
								icon='edit'
								id={project._id}
								url={`${url}/${project._id}`}
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
