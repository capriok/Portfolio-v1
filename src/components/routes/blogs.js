import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import BlogCard from '../templates/blogcard'
import BlogDisplay from '../templates/blogdisplay'

const Blog = () => {

	const blogs = [
		{
			title: 'test blog one',
			date: '07-17-2020',
			category: 'tech',
			body: 'this is the body content of test blog one',
			route: 'blogone'
		},
		{
			title: 'test blog two',
			date: '07-14-2020',
			category: 'tech',
			body: 'this is the body content of test blog two',
			route: 'blogtwo'
		},
	]

	return (
		<div className="blog-cards-layout">
			<h1 className="header">Blog</h1>
			{blogs.map((blog, i) => (
				<BlogCard key={i} blog={blog} />
			))}
			<Router>
				{blogs.map((blog) => (
					<Route path={`${blog.route}`} render={() => (
						<BlogDisplay blog={blog} />
					)} />
				))}
			</Router>
		</div>
	)
}

export default Blog
