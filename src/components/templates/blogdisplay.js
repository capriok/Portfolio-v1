import React from 'react'

const BlogDisplay = ({ blog: { title, date, category, body } }) => {

  return (
    <div className="blog-display">
      <h1 className="title">
        {title}
      </h1>
      <div className="details">
        <span>{date}</span>
        <span>{category}</span>
      </div>
      <p className="body">{body}</p>
    </div>
  )
}

export default BlogDisplay
