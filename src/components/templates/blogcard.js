import React from 'react'
import { Link } from 'react-router-dom'

const BlogCard = ({ blog: { category, title, date, route } }) => {
  return (
    <Link className="blog-card" to={route}>
      <div className="head">
        <h1 className="title">{title}</h1>
      </div>
      <div className="body">
        <p className="date">{date}</p>
        <p className="category">{category}</p>
      </div>
    </Link>
  )
}

export default BlogCard 