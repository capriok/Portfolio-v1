import React from 'react'
import BlogPost from '../templates/blogpost'

import { BrowserRouter as Router, Route } from 'react-router-dom'


const Blog = () => {
	const blogs = {
		blogOne: {
			title: 'tes blog one',
			date: '07-17-2020',
			category: 'tech',
			route: 'blogone',
			body: 'this is the body content of test blog one'
		}
	}

	return (
		<div className="blog-posts-layout">
			<h1 className="header">Blog</h1>
			{blogs.map((blog) => (
				<Route path={`blog/${blog.route}`} render={() => blog.component} />
			))}
		</div>
	)
}

export default Blog
