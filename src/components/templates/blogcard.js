import React from 'react'
import { Link } from 'react-router-dom'

const BlogCard = ({ blog: { category, title, date, route } }) => {
  return (
    <Link className="blog-card" to={route}>
      {/* <div className="head">
        <img src="" alt="" className="thumb"/>
      </div> */}
      <div className="title">
        <h1>{title}</h1>
      </div>
      <div className="body">
        <p>{date}</p>
        <p>{category}</p>
      </div>
    </Link>
  )
}

export default BlogCard 