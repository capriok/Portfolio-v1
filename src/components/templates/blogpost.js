import React from 'react'

const BlogPost = ({ blog: { category, title, date, route } }) => {
  return (
    <div className="blog-posts" onClick={() => window.location.href = `/blog/${route}`}>
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