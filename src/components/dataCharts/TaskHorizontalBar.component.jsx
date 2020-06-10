import React, { useState } from 'react';
import { HorizontalBar } from 'react-chartjs-2';

export const TaskHorizontalBar = () => {
	const [chartData] = useState({
		labels: ['Low', 'Medium', 'High'],
		datasets: [
			{
				backgroundColor: ['#51C63E', '#fbbd08', '#FF6361'],
				data: [20, 30, 50],
			},
		],
	});
	return (
		<div>
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
									max: 100,
								},
							},
						],
					},
				}}
			/>
		</div>
	);
};
