import React from 'react';
import { Bar } from 'react-chartjs-2';

export const ProjectBarChart = ({ projects }) => {
	const getProjectNames = (projects) => {
		return projects.reduce(
			(acc, project) => acc.concat(project.name),
			[]
		);
	};
	let status = ['Pending', 'In Progress', 'Resolved'];
	const getProjectsStatus = (projectsArr, status) => {
		let allStatus = {};
		status.map(
			(name) =>
				(allStatus[name.replace(/\s/g, '')] = projectsArr.map(
					(project) =>
						(project.projectTasks.filter(
							(task) => task.status === name
						).length /
							project.projectTasks.length) *
						100
				))
		);
		return allStatus;
	};
	let { InProgress, Resolved, Pending } = getProjectsStatus(
		projects,
		status
	);

	let projectLabels = getProjectNames(projects);

	const chartData = {
		labels: projectLabels,
		datasets: [
			{
				barPercentage: 0.8,
				label: 'Tasks Resolved',
				backgroundColor: '#00686D',
				data: Resolved,
			},
			{
				barPercentage: 0.8,
				label: 'Tasks In Progress',
				backgroundColor: '#00b5bd',
				data: InProgress,
			},
			{
				barPercentage: 0.8,
				label: 'Tasks Pending',
				backgroundColor: 'rgba(71, 87, 110, 0.5)',
				data: Pending,
			},
		],
	};
	return (
		<div>
			<Bar
				data={chartData}
				options={{
					title: {
						display: false,
					},
					scales: {
						yAxes: [
							{
								stacked: true,
								ticks: {
									callback: function (value, index, values) {
										return value + '%';
									},
									min: 0,
									max: 100,
								},
							},
						],
						xAxes: [
							{
								stacked: true,
							},
						],
					},
					legend: {
						display: true,
						position: 'bottom',
					},
				}}
			/>
		</div>
	);
};
