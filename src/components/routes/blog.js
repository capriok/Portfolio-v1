import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import BlogPost from '../templates/blogpost'
import { importMDX } from 'mdx.macro'

const BLOG_ONE = lazy(() => importMDX('./posts/test1.mdx'))
const BLOG_TWO = lazy(() => importMDX('./posts/test2.mdx'))

const Blog = () => {

  const blogs = [
    {
      title: 'test blog one',
      date: '07-17-2020',
      category: 'tech',
      body: 'this is the body content of test blog one',
      route: 'blogone',
      component: () => (
        <Suspense fallback={<div>Loading...</div>}>
          <BLOG_ONE />
        </Suspense>
      )
    },
    {
      title: 'blah blog two',
      date: '07-14-2020',
      category: 'tech',
      body: 'this is the body content of test blog two',
      route: 'blogtwo',
      component: () => (
        <Suspense fallback={<div>Loading...</div>}>
          <BLOG_TWO />
        </Suspense>
      )
    },
  ]

  return (
    <div className="blog-posts-layout">
      <h1 className="header">Blog</h1>
      {blogs.map((blog, i) => (
        <BlogPost key={i} blog={blog} />
      ))}
      <Router>
        {blogs.map((blog) => {
          const Component = blog.component
          return (
            <Route exact path={`blog/${blog.route}`} component={Component} />
          )
        })}
      </Router>
    </div>
  )
}

export default Blog
