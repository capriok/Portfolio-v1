import React from 'react'
const ReactMarkdown = require('react-markdown')

const blogOne = '# This is a header for test 1\n\nAnd this is a paragraph'
const blogTwo = '# This is a header for test 2\n\nAnd this is a paragraph'

module.exports = {
  blogOne: () => <ReactMarkdown source={blogOne} />,
  blogTwo: () => <ReactMarkdown source={blogTwo} />
}