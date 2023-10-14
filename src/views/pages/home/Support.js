import React from 'react'

const Support = () => {
  return (
    <div className='online_support_row row'>
      <div className='col-lg-3 col-md-3 col-sm-6 mt-md-0 mb-md-0 mt-sm-3 mb-sm-3'>
        <div className='support_fields_container'>
          <ul>
            <li>
              <span>
                <img src='/images/service-1.svg' className='img-fluid' alt='' />
              </span>
              <figure>
                <h5>BOLD CURATION</h5>
              </figure>
            </li>
          </ul>
        </div>
      </div>

      <div className='col-lg-3 col-md-3 col-sm-6 mt-md-0 mb-md-0 mt-sm-3 mb-sm-3'>
        <div className='support_fields_container'>
          <ul>
            <li>
              <span>
                <img src='/images/service-2.svg' className='img-fluid' alt='' />
              </span>
              <figure>
                <h5>expert authentication</h5>
              </figure>
            </li>
          </ul>
        </div>
      </div>
      <div className='col-lg-3 col-md-3 col-sm-6 mt-md-0 mb-md-0 mt-sm-3 mb-sm-3'>
        <div className='support_fields_container'>
          <ul>
            <li>
              <span>
                <img src='/images/service-3.svg' className='img-fluid' alt='' />
              </span>
              <figure>
                <h5>Hussle free return </h5>
              </figure>
            </li>
          </ul>
        </div>
      </div>
      <div className='col-lg-3 col-md-3 col-sm-6 mt-md-0 mb-md-0 mt-sm-3 mb-sm-3'>
        <div className='support_fields_container'>
          <ul>
            <li>
              <span>
                <img src='/images/service-4.svg' className='img-fluid' alt='' />
              </span>
              <figure>
                <h5>free delivery</h5>
              </figure>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Support
