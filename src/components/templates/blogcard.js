import React from 'react'
import { Link } from 'react-router-dom'

const BlogCard = ({ blog: { category, title, date, route } }) => {
  return (
    <Link className="blog-card" to={route}>
      <h1 className="title">
        {title}
      </h1>
      <div className="body">
        <p>{date}</p>
        <p>{category}</p>
      </div>
    </Link>
  )
}

export default BlogCard