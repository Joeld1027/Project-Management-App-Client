import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Grid, Segment, Statistic } from 'semantic-ui-react';

const StatusDoughnutChart = ({ currentTasks }) => {
	let status = ['Pending', 'In Progress', 'Resolved'];
	const getTasksStatus = (tasksArr, statusNames) => {
		let allStatus = {};
		statusNames.map((status) => {
			return (allStatus[status.replace(/\s/g, '')] = tasksArr.filter(
				(task) => task.status === status
			));
		});
		return allStatus;
	};
	let { Pending, InProgress, Resolved } = getTasksStatus(
		currentTasks,
		status
	);
	console.log(Pending);
	const pendingData = {
		labels: ['Pending', 'Total'],
		datasets: [
			{
				borderWidth: 1,
				backgroundColor: ['rgba(71, 87, 110, 0.5)'],
				data: [Pending.length, currentTasks.length],
			},
		],
	};
	const inProgressData = {
		labels: ['In Progress', 'Total'],
		datasets: [
			{
				borderWidth: 1,
				backgroundColor: ['#00b5bd'],
				data: [InProgress.length, currentTasks.length],
			},
		],
	};
	const resolvedData = {
		labels: ['Resolved', 'Total'],
		datasets: [
			{
				borderWidth: 1,
				backgroundColor: ['#00686D'],
				data: [Resolved.length, currentTasks.length],
			},
		],
	};
	return (
		<Grid>
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
							value={Pending.length}
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
							value={InProgress.length}
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
							value={Resolved.length}
						/>
					</Segment>
				</Grid.Column>
			</Grid.Row>
		</Grid>
	);
};

export default StatusDoughnutChart;
