import React from 'react'
import BlogCard from '../templates/blogcard'
import { useStateValue } from '../../state'

const Blogs = () => {
	const [{ blogs },] = useStateValue()
	return (
		<div className="blog-cards-layout">
			<h1 className="header">Blog</h1>
			{blogs.map((blog, i) => (
				<BlogCard key={i} blog={blog} />
			))}
		</div>
	)
}

export default Blogs
