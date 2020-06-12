export const setCommentToTask = ({ taskId, comment }, tasksArr) => {
	const taskIndex = tasksArr.findIndex((task) => task._id === taskId);
	let newArr = [...tasksArr];
	newArr[taskIndex].comments.push(comment);
	return newArr;
};

export const updateTaskComment = ({ taskId, comment }, tasksArr) => {
	const taskIndex = tasksArr.findIndex((task) => task._id === taskId);
	let newArr = [...tasksArr];
	let commentIndex = newArr[taskIndex].comments.findIndex(
		(foundComment) => foundComment._id === comment._id
	);
	newArr[taskIndex].comments[commentIndex] = comment;
	return newArr;
};

export const deleteTaskComment = (
	{ taskId, commentId },
	tasksArr
) => {
	const taskIndex = tasksArr.findIndex((task) => task._id === taskId);
	let newArr = [...tasksArr];
	let newCommentsArr = newArr[taskIndex].comments.filter(
		(comment) => comment._id !== commentId
	);
	newArr[taskIndex].comments = newCommentsArr;
	return newArr;
};
