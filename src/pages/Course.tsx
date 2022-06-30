import React from "react";
import { useParams } from "react-router-dom";
import courses from "./feCourse";

const Course:React.FC = () => {
	let { id } = useParams()
	let course = (courses as Array<any>).find(item => item.id === Number(id))

	return <div className="course-container">
		课程详情
		<h2>{ course.name }</h2>
		<span>{ course.desc }</span>
	</div>
}

export default Course;