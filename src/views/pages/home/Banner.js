import Link from 'next/link'
import React from 'react'
import { doNothing } from 'src/api-requests'

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

                  {/* <button
                    type='button'
                    data-bs-target='#carouselExampleCaptions'
                    data-bs-slide-to='0'
                    class='active'
                    aria-current='true'
                    aria-label='Slide 1'
                  ></button>
                  <button
                    type='button'
                    data-bs-target='#carouselExampleCaptions'
                    data-bs-slide-to='1'
                    aria-label='Slide 2'
                  ></button>
                  <button
                    type='button'
                    data-bs-target='#carouselExampleCaptions'
                    data-bs-slide-to='2'
                    aria-label='Slide 3'
                  ></button> */}
                </div>
                <div class='carousel-inner'>

                {data
                    ?.filter(item => item?.bannerPosition === 'carousel')
                    ?.map((item, i) => (
                      <div key={i} className={`carousel-item ${i === 0 ? 'active' : ''}`}>
                        <img
                          src='/images/banner-1.png'
                          className='d-block w-100 img-fluid banner-background'
                          alt='...'
                        />
                        <div className='carousel-caption d-sm-block d-md-block'>
                          <div className='row'>
                            <div className='col-md-6 col-sm-6 text-carousal-effect order-2 order-sm-1'>
                              <h1>{item?.heading}</h1>
                              <p>{item?.description}</p>
                              {/* <Link href='/search/all' className='btn btn-primary'>
                                Shop All
                              </Link> */}
                                 <div class='banner btn_group'>
                            <a href='Producr-details.html' onClick={doNothing} class='btn gradiant_button'>
                              Shop Now
                            </a>
                            <a onClick={doNothing} href='product-list.html' class='btn primary-button'>
                              View More
                            </a>
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

                  {/* <div class='carousel-item active'>
                    <img src='/images/banner-1.png' class='d-block w-100 img-fluid banner-background' alt='...' />
                    <div class='carousel-caption d-sm-block d-md-block'>
                      <div class='row'>
                        <div class='col-md-6 col-sm-6 text-carousal-effect order-2 order-sm-1'>
                          <span class='banner_category'>Trendy Design</span>
                          <h1>FASHIONABLE DESIGNING JEWELLARY</h1>
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                            galley of type and scrambled it to make a type specimen book. It has survived not only five
                            centuries
                          </p>
                          <div class='banner btn_group'>
                            <a href='Producr-details.html' class='btn gradiant_button'>
                              Shop Now
                            </a>
                            <a href='product-list.html' class='btn primary-button'>
                              View More
                            </a>
                          </div>{' '}
                        </div>
                        <div class='col-md-6 col-sm-6 image-carousal-effect order-1 order-sm-2'>
                          <img src='/images/p-banner-2.png' class='d-block w-100 img-fluid' alt='...' />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class='carousel-item'>
                    <img src='/images/banner-1.png' class='d-block w-100 img-fluid banner-background' alt='...' />
                    <div class='carousel-caption d-sm-block d-md-block'>
                      <div class='row'>
                        <div class='col-md-6 col-sm-6 text-carousal-effect order-2 order-sm-1'>
                          <span class='banner_category'>Trendy Design</span>
                          <h1>FASHIONABLE DESIGNING JEWELLARY</h1>
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                            galley of type and scrambled it to make a type specimen book. It has survived not only five
                            centuries
                          </p>
                          <div class='banner btn_group'>
                            <a href='Producr-details.html' class='btn gradiant_button'>
                              Shop Now
                            </a>
                            <a href='product-list.html' class='btn primary-button'>
                              View More
                            </a>
                          </div>{' '}
                        </div>
                        <div class='col-md-6 col-sm-6 image-carousal-effect order-1 order-sm-2'>
                          <img src='/images/p-banner-1.png' class='d-block w-100 img-fluid' alt='...' />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class='carousel-item'>
                    <img src='/images/banner-1.png' class='d-block w-100 img-fluid banner-background' alt='...' />
                    <div class='carousel-caption d-sm-block d-md-block'>
                      <div class='row'>
                        <div class='col-md-6  col-sm-6 text-carousal-effect order-2 order-sm-1'>
                          <span class='banner_category'>Trendy Design</span>
                          <h1>FASHIONABLE DESIGNING JEWELLARY</h1>
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                            galley of type and scrambled it to make a type specimen book. It has survived not only five
                            centuries
                          </p>
                          <div class='banner btn_group'>
                            <a href='Producr-details.html' class='btn gradiant_button'>
                              Shop Now
                            </a>
                            <a href='product-list.html' class='btn primary-button'>
                              View More
                            </a>
                          </div>{' '}
                        </div>
                        <div class='col-md-6  col-sm-6 image-carousal-effect order-1 order-sm-2'>
                          <img src='/images/p-banner-1.png' class='d-block w-100 img-fluid' alt='...' />
                        </div>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <div className='banner-section'>
      <div className='container'>
        <div className='row align-items-start'>
          <div className='col-lg-8 col-md-12 mt-2 mb-3'>
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
                  {/* <button
                    type='button'
                    data-bs-target='#carouselExampleCaptions'
                    data-bs-slide-to='1'
                    aria-label='Slide 2'
                  ></button>
                  <button
                    type='button'
                    data-bs-target='#carouselExampleCaptions'
                    data-bs-slide-to='2'
                    aria-label='Slide 3'
                  ></button> */}
                </div>
                <div className='carousel-inner'>
                  {data
                    ?.filter(item => item?.bannerPosition === 'carousel')
                    ?.map((item, i) => (
                      <div key={i} className={`carousel-item ${i === 0 ? 'active' : ''}`}>
                        <img
                          src='/images/banner-1.png'
                          className='d-block w-100 img-fluid banner-background'
                          alt='...'
                        />
                        <div className='carousel-caption d-sm-block d-md-block'>
                          <div className='row'>
                            <div className='col-md-6 col-sm-6 text-carousal-effect order-2 order-sm-1'>
                              <h1>{item?.heading}</h1>
                              <p>{item?.description}</p>
                              <Link href='/search/all' className='btn btn-primary'>
                                Shop All
                              </Link>
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
                  {/* <div className='carousel-item'>
                    <img src='/images/banner-1.png' className='d-block w-100 img-fluid banner-background' alt='...' />
                    <div className='carousel-caption d-sm-block d-md-block'>
                      <div className='row'>
                        <div className='col-md-8 col-sm-8 text-carousal-effect order-2 order-sm-1'>
                          <h1>Get the best deal today</h1>
                          <p>
                            Lorem ipsum dolor sit amet consectetur. Nec aliquam aliquet faucibus pretium pretium enim
                            libero sed vel. Facilisi.
                          </p>
                          <a href='#' className='btn btn-primary'>
                            Shop All
                          </a>
                        </div>
                        <div className='col-md-4 col-sm-4 image-carousal-effect order-1 order-sm-2'>
                          <img src='/images/banner-1top.png' className='d-block w-100 img-fluid' alt='...' />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='carousel-item'>
                    <img src='/images/banner-1.png' className='d-block w-100 img-fluid banner-background' alt='...' />
                    <div className='carousel-caption d-sm-block d-md-block'>
                      <div className='row'>
                        <div className='col-md-8  col-sm-8 text-carousal-effect order-2 order-sm-1'>
                          <h1>Get the best deal today</h1>
                          <p>
                            Lorem ipsum dolor sit amet consectetur. Nec aliquam aliquet faucibus pretium pretium enim
                            libero sed vel. Facilisi.
                          </p>
                          <a href='#' className='btn btn-primary'>
                            Shop All
                          </a>
                        </div>
                        <div className='col-md-4  col-sm-4 image-carousal-effect order-1 order-sm-2'>
                          <img src='/images/banner-1top.png' className='d-block w-100 img-fluid' alt='...' />
                        </div>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-4 col-md-12'>
            <div className='row'>
              {data
                ?.filter(item => item?.bannerPosition !== 'carousel')
                ?.map((item, i) => (
                  <div key={i} className='col-lg-12 col-md-6 col-sm-12 mt-2 mb-3 right_carousal'>
                    <div className={`right_colum_banner ${i === 0 ? 'banner_blue' : 'banner_green'}`}>
                      <div className='image_text_container'>
                        <div className='row'>
                          <div className='col-md-8 col-sm-6 side-banner-text'>
                            <h1>{item?.heading}</h1>
                            <p>{item?.description}</p>
                          </div>
                          <div className='col-md-4 col-sm-6 side_banner_image'>
                            <img
                              src={item?.bannerImage ? `${mediaUrl}${item?.bannerImage}` : `/images/banner-2top.png`}
                              className='img-fluid'
                              alt=''
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

              {/* <div className="col-lg-12 col-md-6 col-sm-12 mt-2 mb-3">
              <div className="right_colum_banner banner_blue">
                <div className="image_text_container">
                  <div className="row">
                    <div className="col-md-8 col-sm-6 side-banner-text">
                      <h1>Get the best deal today</h1>
                      <p>Lorem ipsum dolor sit amet consectetur. Nec aliquam aliquet.</p>
                    </div>
                    <div className="col-md-4 col-sm-6 side_banner_image">
                      <img src="/images/banner-3top.png" className="img-fluid" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
