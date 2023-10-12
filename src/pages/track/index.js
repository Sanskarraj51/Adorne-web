import React from 'react'
import BreadCrumb from 'src/@core/components/breadcrumb'

const Track = () => {
  return (
    <>
      <BreadCrumb path='Track Order' />
      <div className='container mt-4 mb-5'>
        <div className='row'>
          <div className='order_info'>
            <figure>
              <a className='product-image' href='Producr-details.html'>
                <img src='/images/p-banner-2.png' className='img-fluid' alt='' />
              </a>
            </figure>
            <span>
              <h4>East Hampton Fleece Hoodie</h4>
              <p>
                Product Code: <span className='product-code'>EXT006</span>
              </p>
            </span>
          </div>
          <div className='track_order'>
            <div className='col-12 col-md-12 hh-grayBox pt45 pb20'>
              <div className='row justify-content-between'>
                <div className='order-tracking completed'>
                  <span className='is-complete'></span>
                  <p>
                    Ordered
                    <br />
                    <span>Mon, 20 Aug 2023</span>
                  </p>
                </div>
                <div className='order-tracking completed'>
                  <span className='is-complete'></span>
                  <p>
                    Shipped
                    <br />
                    <span>Tue, 21 Aug 2023</span>
                  </p>
                </div>
                <div className='order-tracking'>
                  <span className='is-complete'></span>
                  <p>
                    Delivered
                    <br />
                    <span>Fri, 25 Aug 2023</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Track
