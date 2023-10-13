import React from 'react'
import PopularProductCard from '../product/PopularProductCard'
import Link from 'next/link'

const PopularItems = ({ data, mediaUrl }) => {
  return (
    <section className='popular_items mt-4 mb-4'>
      <div className='container'>
        <div className='row align-items-center popular_titles'>
          <div className='col-6'>
            <div className='popular_ite_title'>
              <h4>Popular Items</h4>
            </div>
          </div>

          <div className='col-6'>
            <div className='popular_ite_title'>
              <Link href='/search/a' className='all_products_link'>
                All Products
              </Link>
            </div>
          </div>
        </div>
        <div className='row mt-3'>
          {data?.slice(0, 4)?.map((item, i) => (
            <div key={i} className='col-lg-3 col-md-6 col-sm-6 mt-3'>
              <PopularProductCard mediaUrl={mediaUrl} item={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PopularItems
