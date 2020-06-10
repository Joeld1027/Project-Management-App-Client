import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';

export const ProjectBarChart = () => {
	const [chartData] = useState({
		labels: [
			'Project 1',
			'project 2',
			'Project 3',
			'Project 4',
			'Project 5',
		],
		datasets: [
			{
				barPercentage: 0.7,
				label: 'Tasks Resolved',
				backgroundColor: '#00686D',
				data: [20, 30, 15, 30, 10],
			},
			{
				barPercentage: 0.7,
				label: 'Tasks In Progress',
				backgroundColor: '#00b5bd',
				data: [20, 45, 15, 30, 75],
			},
			{
				barPercentage: 0.7,
				label: 'Tasks Pending',
				backgroundColor: 'rgba(0,0,0,0.3)',
				data: [60, 25, 70, 40, 15],
			},
		],
	});
	return (
		<div>
			<Bar
				data={chartData}
				options={{
					title: {
						display: true,
						text: 'Assigned Projects Overview',
						fontSize: 20,
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
