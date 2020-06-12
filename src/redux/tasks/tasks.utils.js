export const setCommentToTask = ({ taskId, comment }, tasksArr) => {
	const taskIndex = tasksArr.findIndex((task) => task._id === taskId);
	let newArr = [...tasksArr];
	newArr[taskIndex].comments.push(comment);
	return newArr;
};
