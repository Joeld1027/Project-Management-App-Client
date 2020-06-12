import React from 'react';
import { Radar } from 'react-chartjs-2';
import { Header } from 'semantic-ui-react';

const labels = ['Bug/Fix', 'Task', 'Update', 'Hardware', 'Software'];

const TaskCategoryCharts = ({ currentTasks }) => {
	const handleCategory = (taskArr, categories) => {
		let arr = [];
		categories.map((category) =>
			arr.push(
				taskArr.filter((task) => task.category === category).length
			)
		);
		return arr;
	};

	let categoryArray = handleCategory(currentTasks, labels);

	const data = {
		labels: labels,
		datasets: [
			{
				label: 'Task Category',
				backgroundColor: 'rgba(0,86,83,0.4)',
				borderColor: 'rgba(0,86,83,1)',
				pointRadius: 4,
				pointBackgroundColor: 'rgba(0,108,104,1)',
				pointBorderColor: '#fff',
				pointHoverBackgroundColor: '#fff',
				pointHoverBorderColor: 'rgba(179,181,198,1)',
				data: categoryArray,
			},
		],
	};
	return (
		<div>
			<Header
				textAlign='center'
				color='teal'
				as='h2'
				content='Category Radar'
			/>
			<Radar
				options={{
					scale: {
						ticks: {
							suggestedMin: 0,
						},
					},
				}}
				data={data}
			/>
		</div>
	);
};

export default TaskCategoryCharts;
