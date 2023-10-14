import Link from 'next/link'
import React from 'react'

const Banner = ({ data, mediaUrl }) => {
  return (
    <div className='banner-section'>
      <div className='container'>
        <div className='row align-items-start'>
          <div className='col-lg-12 col-md-12 '>
            <div className='banner_silder'>
              <div id='carouselExampleCaptions' className='carousel slide' data-bs-ride='carousel'>
                <div className='carousel-indicators'>
                  {data
                    ?.filter(item => item?.bannerPosition === 'carousel')
                    ?.map((item, i) => (
                      <button
                        key={i}
                        type='button'
                        data-bs-target='#carouselExampleCaptions'
                        data-bs-slide-to={i}
                        className={i === 0 ? 'active' : ''}
                        aria-current='true'
                        aria-label={`Slide ${i + 1}`}
                      ></button>
                    ))}
                </div>
                <div className='carousel-inner'>
                  {data?.map((item, i) => (
                    <div key={i} className={`carousel-item ${i === 0 ? 'active' : ''}`}>
                      <img src='/images/banner-1.png' className='d-block w-100 img-fluid banner-background' alt='...' />
                      <div className='carousel-caption d-sm-block d-md-block'>
                        <div className='row'>
                          <div className='col-md-6 col-sm-6 text-carousal-effect order-2 order-sm-1'>
                            <h1>{item?.heading}</h1>
                            <p>{item?.description}</p>
                            <div className='banner btn_group'>
                              <Link href={`/search/a`} className='btn gradiant_button'>
                                Shop Now
                              </Link>
                              <Link href='/search/a' className='btn primary-button'>
                                View More
                              </Link>
                            </div>
                          </div>
                          <div className='col-md-6 col-sm-6 image-carousal-effect order-1 order-sm-2'>
                            <img
                              src={item?.bannerImage ? `${mediaUrl}${item?.bannerImage}` : `/images/banner-1top.png`}
                              className='d-block w-100 img-fluid'
                              alt='...'
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
