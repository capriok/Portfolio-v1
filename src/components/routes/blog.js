import React, { lazy, Suspense } from 'react'
import { importMDX } from 'mdx.macro'
import BlogPost from '../templates/blogpost'

const Content = lazy(() => importMDX('./posts/test.mdx'))

const Blog = () => {

	return (
		<div className="blog-posts-layout">
			<h1 className="header">Blog</h1>
			<BlogPost />
			<Suspense fallback={<div>Loading...</div>}>
				<Content />
			</Suspense>
		</div>
	)
}

export default Blog
