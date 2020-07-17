import React from 'react'

const BlogPost = ({ category, title, date }) => {
  return (
    <div className="blog-posts">
      <div className="head">
        <h1 className="title">{title}</h1>
      </div>
      <div className="body">
        <p className="date">{date}</p>
        <p className="category">{category}</p>
      </div>
    </div>
  )
}

export default BlogPost 