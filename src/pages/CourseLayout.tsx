import React from "react";
import { Outlet } from 'react-router-dom';

const CourseLayout:React.FC = () => {
	return <div>
		{/* Outlet 渲染子路由 */}
		<Outlet />
	</div>
}

export default CourseLayout;