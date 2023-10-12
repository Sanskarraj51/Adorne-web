import React from 'react'
import BlogCard from '../blogs/BlogCard'

const Blogs = ({ mediaUrl, data = [] }) => {
  return (
    <>
      <div className='blog_title_container text-center pt-3 pb-4'>
        <h3>Latest Blogs</h3>
      </div>

      <div className='row'>
        {data?.length ? (
          data?.map(item => (
            <div key={item} className='col-lg-4 col-md-6 col-sm-12'>
              <BlogCard mediaUrl={mediaUrl} item={item}/>
            </div>
          ))
        ) : (
          <p>No Blogs Found</p>
        )}
      </div>
    </>
  )
}

export default Blogs
