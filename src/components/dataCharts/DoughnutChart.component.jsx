import React, { useState } from 'react';
import { Doughnut } from 'react-chartjs-2';

export const DoughnutChart = () => {
	const [chartData] = useState({
		labels: ['Low', 'Medium', 'High'],
		datasets: [
			{
				label: 'Priority',
				data: [5, 9, 3],
				backgroundColor: ['#51C63E', '#fbbd08', '#FF6361'],
			},
		],
	});
	return (
		<div>
			<Doughnut
				data={chartData}
				options={{
					legend: {
						display: true,
						position: 'bottom',
					},
				}}
			/>
		</div>
	);
};
