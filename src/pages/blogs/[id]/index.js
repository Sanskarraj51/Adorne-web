import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import BreadCrumb from 'src/@core/components/breadcrumb'
import FallbackSpinner from 'src/@core/components/spinner'
import { handleGetAPI } from 'src/api-requests'
import authConfig from 'src/configs/auth'

const BlogDetail = () => {
  const [blogs, setBlogs] = useState([])

  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const { id } = router.query

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const getProductBlogData = async () => {
    setLoading(true)
    let response = await handleGetAPI(authConfig.blog)
    let details = response?.data?.posts?.find(item => item.id == id)
    if (details) {
      details = { ...details, mediaUrl: response?.data?.mediaUrl }
      setBlogs(details)
    }
    setLoading(false)
  }

  // const refreshProductDetailData = async () => {
  //   await dispatch(fetchProductDetails({ id: id }))
  // }

  useEffect(() => {
    if (id) {
      getProductBlogData()
    }
  }, [id])

  if (loading) {
    return <FallbackSpinner />
  }

  return (
    <>
      <BreadCrumb path='Blog Detail' />
      <section className='blog_detail'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 col-md-10 mx-auto'>
              <div className='blog_detail_card'>
                <figure className='blog_img'>
                  <img
                    loading='lazy'
                    src={blogs?.postImage ? `${blogs?.mediaUrl}${blogs?.postImage}` : '/images/blog-main.png'}
                    alt='technology'
                    className='img-fluid'
                  />
                </figure>

                <div className='d-flex align-items-start justify-content-between'>
                  <div className='card_data'>
                    <span className='blog_title'>{blogs?.title}</span>

                    {/* <aside> */}
                      <div dangerouslySetInnerHTML={{ __html: blogs?.post }}></div>
                    {/* </aside> */}
                    {/* <aside>
                      <div className='row blog_flax'>
                        <div className='col-md-8'>
                          <p>{blogs?.post}</p>
                        </div>
                        <div className='col-md-4'>
                          <figure>
                            <img src='/images/blog-min.png' alt='ehr-challanges' className='img-fluid' />
                          </figure>
                        </div>
                      </div>
                    </aside> */}

                    {/* <div className='blog_cap_italic'>
                      In conclusion, EHR development requires adherence to a variety of regulatory and compliance
                      requirements. Developers must ensure that their systems meet these requirements in order to ensure
                      patient safety and security, promote data sharing, and comply with applicable laws and
                      regulations.
                    </div> */}
                  </div>
                  <ul className='social'>
                    <li>
                      <a href='#0'>
                        <img src='/images/b-facebook.svg' alt=' facebook' className='img-fluid' />
                      </a>
                    </li>
                    <li>
                      <a href='#0'>
                        <img src='/images/b-youtube.svg' alt=' youtube' className='img-fluid' />
                      </a>
                    </li>
                    <li>
                      <a href='#0'>
                        <img src='/images/b-instagram.svg' alt=' instagram' className='img-fluid' />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default BlogDetail
