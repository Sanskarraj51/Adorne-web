import axios from 'axios'
import React, { useEffect, useState } from 'react'
import BreadCrumb from 'src/@core/components/breadcrumb'
import FallbackSpinner from 'src/@core/components/spinner'
import { handleGetAPI } from 'src/api-requests'
import BlogCard from 'src/views/pages/blogs/BlogCard'
import authConfig from 'src/configs/auth'

const Blogs = () => {
  const [blogs, setBlogs] = useState([])
  const [loading, setLoading] = useState(false)

  async function getAllBlogs() {
    setLoading(true)
    const response = await handleGetAPI(authConfig.blog)
    if (response) {
      setBlogs(response?.data)
    }
    setLoading(false)
  }

  useEffect(() => {
    getAllBlogs()
  }, [])

  if(loading){
    return <FallbackSpinner />
  }

  return (
    <>
      <BreadCrumb path='Blogs' />
      <div className='container mt-4 mb-5'>
        <div className='row'>
          <div className='latest-blog'>
            <div className='container'>
              <div className='row'>
                {blogs?.posts?.map(item => (
                  <div key={item} className='col-lg-4 col-md-6 col-sm-12'>
                    <BlogCard mediaUrl={blogs?.mediaUrl} item={item} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Blogs
