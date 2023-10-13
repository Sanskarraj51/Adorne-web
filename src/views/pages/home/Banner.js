import Link from 'next/link'
import React from 'react'

const Banner = ({ data, mediaUrl }) => {
  return (
    <div class='banner-section'>
      <div class='container'>
        <div class='row align-items-start'>
          <div class='col-lg-12 col-md-12 '>
            <div class='banner_silder'>
              <div id='carouselExampleCaptions' class='carousel slide' data-bs-ride='carousel'>
                <div class='carousel-indicators'>
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
                <div class='carousel-inner'>
                  {data?.map((item, i) => (
                    <div key={i} className={`carousel-item ${i === 0 ? 'active' : ''}`}>
                      <img src='/images/banner-1.png' className='d-block w-100 img-fluid banner-background' alt='...' />
                      <div className='carousel-caption d-sm-block d-md-block'>
                        <div className='row'>
                          <div className='col-md-6 col-sm-6 text-carousal-effect order-2 order-sm-1'>
                            <h1>{item?.heading}</h1>
                            <p>{item?.description}</p>
                            <div class='banner btn_group'>
                              <Link href={`/search/a`} class='btn gradiant_button'>
                                Shop Now
                              </Link>
                              <Link href='/search/a' class='btn primary-button'>
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
