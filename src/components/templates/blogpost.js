import React from 'react'

const BlogPost = ({ category, title, date }) => {
	return (
		<div className="blog-posts">
			<div className="head">
				<h1 className="title">{post.title}</h1>
				<p className="date">{post.date}</p>
			</div>
			<div className="body">
				<p>{post.body}</p>
			</div>
		</div>
	)
}

export default BlogPost