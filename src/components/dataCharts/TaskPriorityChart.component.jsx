import React from 'react';
import { Doughnut, HorizontalBar } from 'react-chartjs-2';

export const DoughnutChart = ({ projectTasks, horizontal }) => {
	const getPriorityLength = (arr) => {
		let lowArr = arr.filter((a) => a.priority === 'low');
		let mediumArr = arr.filter((a) => a.priority === 'medium');
		let highArr = arr.filter((a) => a.priority === 'high');
		return {
			low: lowArr.length,
			medium: mediumArr.length,
			high: highArr.length,
		};
	};
	let { low, medium, high } = getPriorityLength(projectTasks);
	console.log(projectTasks);

	const chartData = {
		labels: ['Low', 'Medium', 'High'],
		datasets: [
			{
				data: [low, medium, high],
				backgroundColor: ['#573ECB', '#FFCE00', '#FF7400'],
			},
		],
	};
	return (
		<div>
			{horizontal ? (
				<HorizontalBar
					data={chartData}
					options={{
						legend: {
							display: false,
						},
						title: {
							display: true,
							text: 'Tasks by priority',
							fontSize: 20,
						},
						scales: {
							xAxes: [
								{
									ticks: {
										min: 0,
										max: projectTasks.length,
									},
								},
							],
						},
					}}
				/>
			) : (
				<Doughnut
					data={chartData}
					options={{
						title: {
							display: true,
							text: 'Tasks Priority',
							fontSize: 18,
						},
						legend: {
							display: true,
							position: 'bottom',
						},
					}}
				/>
			)}
		</div>
	);
};
