import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Grid, Segment, Statistic, Header } from 'semantic-ui-react';

const StatusDoughnutChart = ({ currentTasks }) => {
	let status = ['Pending', 'In Progress', 'Resolved'];

	const getTasksStatus = (tasksArr, statusNames) => {
		let allStatus = {};
		statusNames.map(
			(status) =>
				(allStatus[status.replace(/\s/g, '')] = tasksArr.filter(
					(task) => task.status === status
				).length)
		);
		return allStatus;
	};
	let { Pending, InProgress, Resolved } = getTasksStatus(
		currentTasks,
		status
	);

	const pendingData = {
		labels: ['Pending', 'Others'],
		datasets: [
			{
				borderWidth: 1,
				backgroundColor: ['rgba(71, 87, 110, 0.5)'],
				data: [Pending, Pending - currentTasks.length],
			},
		],
	};
	const inProgressData = {
		labels: ['In Progress', 'Others'],
		datasets: [
			{
				borderWidth: 1,
				backgroundColor: ['#00b5bd'],
				data: [InProgress, InProgress - currentTasks.length],
			},
		],
	};
	const resolvedData = {
		labels: ['Resolved', 'Others'],
		datasets: [
			{
				borderWidth: 1,
				backgroundColor: ['#00686D'],
				data: [Resolved, Resolved - currentTasks.length],
			},
		],
	};
	return (
		<>
			<Header
				color='teal'
				as='h2'
				content='Track all tasks.'
				textAlign='center'
			/>
			<Grid stackable>
				<Grid.Row>
					<Grid.Column width={5}>
						<Segment raised color='grey' textAlign='center'>
							<Doughnut
								data={pendingData}
								options={{
									cutoutPercentage: 70,
									rotation: -1 * Math.PI,
									legend: {
										display: true,
									},
								}}
							/>

							<Statistic
								label='Pending'
								color='grey'
								value={Pending}
							/>
						</Segment>
					</Grid.Column>
					<Grid.Column width={5}>
						<Segment raised color='teal' textAlign='center'>
							<Doughnut
								data={inProgressData}
								options={{
									cutoutPercentage: 70,
									rotation: -1 * Math.PI,
									legend: {
										display: true,
									},
								}}
							/>
							<Statistic
								label='In Progress'
								color='teal'
								value={InProgress}
							/>
						</Segment>
					</Grid.Column>
					<Grid.Column width={5}>
						<Segment textAlign='center' raised color='black'>
							<Doughnut
								data={resolvedData}
								options={{
									cutoutPercentage: 70,
									rotation: -1 * Math.PI,
									legend: {
										display: true,
									},
								}}
							/>

							<Statistic
								label='Resolved'
								color='black'
								value={Resolved}
							/>
						</Segment>
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</>
	);
};

export default StatusDoughnutChart;
