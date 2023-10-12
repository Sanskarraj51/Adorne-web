import moment from 'moment'
import { useRouter } from 'next/router'
import React from 'react'

const BlogCard = ({ item, mediaUrl }) => {
  const router = useRouter()

  return (
    <div className='blog_card' onClick={() => router.push(`/blogs/${item?.id}`)}>
      <img
        loading='lazy'
        src={item?.postImage ? `${mediaUrl}${item?.postImage}` : '/images/latest-blog-1.png'}
        className='img-fluid'
        alt=''
      />
      <ul>
        <li>
          <span>
            <img src='/images/Frame 1250.png' className='img-fluid' alt='' />
            <p className='date_container'>
              <span className='date'>{moment(item?.createdAt).format('DD')}</span>{' '}
              <span className='month'>{moment(item?.createdAt).format('MMM')}</span>
            </p>
          </span>
          <figure>
            <a href='blog-detail.html'>{item?.title}</a>

            <p 
            // className='text-line-2 text-eclipse '
             dangerouslySetInnerHTML={{ __html: item?.post }}></p>
          </figure>
        </li>
      </ul>
    </div>
  )
}

export default BlogCard
