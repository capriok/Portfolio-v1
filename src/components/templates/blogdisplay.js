import React from 'react'
import ReactMarkdown from 'react-markdown'

const input = '# This is a header\n\nAnd this is a paragraph'

const blogOne = <ReactMarkdown source={input} />
const blogTwo = <ReactMarkdown source={input} />

const BlogDisplay = ({ blog: { title, date, category } }) => {
  return (
    <div className="blog-display">
      <h1 className="title">{title}</h1>
      <div className="details">
        <span>{date}</span>
        <span>{category}</span>
      </div>
      <p className="body">{blogOne}</p>
    </div>
  )
}

export default BlogDisplay
