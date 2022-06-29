import React from "react";
import { Link } from "react-router-dom";
import courses from "./feCourse"

const CourseList:React.FC = () => {
	 
	const lists = courses.map(item => {
		return <li key={item.id}>
			<Link to={`/courses/${item.id}`}> {item.name} </Link>
		</li>
	})

	return <div>courseList
		<ul>
			{ lists }
		</ul>
	</div>
}

export default CourseList;