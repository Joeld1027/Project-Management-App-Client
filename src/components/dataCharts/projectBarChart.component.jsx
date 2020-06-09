import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';

export const ProjectBarChart = () => {
	const [chartData] = useState({
		labels: ['Project 1', 'project 2', 'Project 3', 'Project 4'],
		datasets: [
			{
				label: 'Propjects',
				backgroundColor: '#51C63E',
				data: [20, 90, 60, 35],
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
						text: 'Projects completion percent',
					},
					scales: {
						yAxes: [
							{
								ticks: {
									callback: function (value, index, values) {
										return value + '%';
									},
									min: 0,
									max: 100,
								},
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
