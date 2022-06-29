import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Home from './pages/Home'
import About from './pages/About'
import CourseLayout from './pages/CourseLayout'
import Course from './pages/Course'
import CourseList from './pages/CourseList'

const App = () => {
	return <BrowserRouter>
			<Link className='link' to="/">Home</Link>
			<Link className='link' to="/about">About</Link>
			<Link className='link' to="/courses">courses</Link>

			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/about" element={<About />}></Route>

				<Route path="/courses" element={<CourseLayout />}>
					<Route index element={<CourseList />}></Route>
					<Route path=":id" element={<Course />}></Route>
				</Route>

			</Routes>
		</BrowserRouter>
}

export default App