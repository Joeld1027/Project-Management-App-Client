import React from 'react';
import { useParams } from 'react-router-dom';

export const ProjectDetails = () => {
	const { id } = useParams();
	console.log(id);
	return <div>testing the project routes</div>;
};
