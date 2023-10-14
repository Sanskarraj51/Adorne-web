import React from 'react'
import FeatureProductCard from '../product/FeatureProductCard'
import Link from 'next/link'

const FetauredProduct = ({ data, mediaUrl }) => {
  return (
    <section className='features_item'>
      <div className='container'>
        <div className='row collection_flex'>
          <div className='col-xl-4 col-lg-12 mt-3'>
            <div className='feature'>
              <h1>Explore our collections</h1>
              <p>
                Donec tristique ac bibendum viverra eleifend sit mauris sem cursus. Nunc aliquam nisl nec commodo, velit
                quam condimentum.
              </p>
              <Link href='search/a' className='btn gradiant_button'>
                Explore All
              </Link>
            </div>
          </div>
          <div className='col-xl-8 col-lg-12 '>
            <div className='featured_products'>
              <div className='col-lg-6 col-md-6 col-sm-12 mt-3'>
                <div className='feature'>
                  <h4>Top Selling Product</h4>
                  <div className='featured_lists'>
                    {data?.topSellingProduct?.slice(0, 3)?.map((item, i) => (
                      <FeatureProductCard mediaUrl={mediaUrl} key={i} item={item} />
                    ))}
                  </div>
                </div>
              </div>

              <div className='col-lg-6 col-md-6 col-sm-12 mt-3'>
                <div className='feature'>
                  <h4>Newest Arrival</h4>
                  <div className='featured_lists'>
                    {data?.newestArrival?.slice(0, 3)?.map((item, i) => (
                      <FeatureProductCard mediaUrl={mediaUrl} key={i} item={item} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FetauredProduct
