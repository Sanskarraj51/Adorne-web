import React from 'react'
import FeatureProductCard from '../product/FeatureProductCard'

const FetauredProduct = ({ data, mediaUrl }) => {
  return (
    <section class='features_item'>
      <div class='container'>
        <div class='row collection_flex'>
          <div class='col-xl-4 col-lg-12 mt-3'>
            <div class='feature'>
              <h1>Explore our collections</h1>
              <p>
                Donec tristique ac bibendum viverra eleifend sit mauris sem cursus. Nunc aliquam nisl nec commodo, velit
                quam condimentum.
              </p>
              <a href='product-list.html' class='btn gradiant_button'>
                Explore All
              </a>
            </div>
          </div>
          <div class='col-xl-8 col-lg-12 '>
            <div class='featured_products'>
              <div class='col-lg-6 col-md-6 col-sm-12 mt-3'>
                <div class='feature'>
                  <h4>Top Selling Product</h4>
                  <div class='featured_lists'>
                    {data?.topSellingProduct?.slice(0, 3)?.map((item, i) => (
                      <FeatureProductCard mediaUrl={mediaUrl} key={i} item={item} />
                    ))}
                  </div>
                </div>
              </div>

              <div class='col-lg-6 col-md-6 col-sm-12 mt-3'>
                <div class='feature'>
                  <h4>Newest Arrival</h4>
                  <div class='featured_lists'>
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
