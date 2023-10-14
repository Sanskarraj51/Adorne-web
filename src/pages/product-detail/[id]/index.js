import { useRouter } from 'next/router'
import React, { Fragment, useEffect, useState } from 'react'
import BreadCrumb from 'src/@core/components/breadcrumb'
import FeaturedListCard from 'src/views/pages/product/FeaturedListCard'
import $ from 'jquery'
import Icon from 'src/@core/components/icon'
import { doNothing, handlePostAPI } from 'src/api-requests'
import Link from 'next/link'
import { useSelector } from 'src/store'
import FallbackSpinner from 'src/@core/components/spinner'
import { addToCart, fetchProductDetailData } from 'src/store/apps/product'
import { useDispatch } from 'react-redux'
import toast from 'react-hot-toast'
import { useAuth } from 'src/hooks/useAuth'
import { setLoginForm } from 'src/store/apps/user'
import ReactImageMagnify from 'react-image-magnify'
import { Box } from '@mui/system'

const ProductDetail = () => {
  const [variant, setVariant] = useState({})
  const [selectedSize, setSelectedSize] = useState('')
  const [selectedColor, setSelectedColor] = useState('')
  const [qty, setQty] = useState(1)
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const { user } = useAuth()
  const { id } = router.query
  const store = useSelector(state => state.product)
  const dispatch = useDispatch()

  const { productDetail } = useSelector(state => state.product)

  const productdata = productDetail?.products
  const mediaUrl = productDetail?.mediaUrl
  let desc = productdata?.description ? JSON.parse(productdata?.description) : []

  const getProductDetailData = async () => {
    setLoading(true)
    await dispatch(fetchProductDetailData(id))
    setLoading(false)
  }

  function handleIncrease() {
    if (qty < 5) {
      setQty(qty + 1)
    } else {
      toast.error('Max 5 products Allowed')
    }
  }
  function handleDecrease() {
    if (qty > 1) {
      setQty(qty - 1)
    }
  }

  useEffect(() => {
    if (id) {
      getProductDetailData()
    }
  }, [id])

  // useEffect(() => {
  //   $('.zoom').mousemove(function (e) {
  //     zoom(e)
  //   })

  //   function zoom(e) {
  //     var x, y
  //     var zoomer = e.currentTarget
  //     if (e.offsetX) {
  //       offsetX = e.offsetX
  //     } else {
  //       offsetX = e.touches[0].pageX
  //     }

  //     if (e.offsetY) {
  //       offsetY = e.offsetY
  //     } else {
  //       offsetX = e.touches[0].pageX
  //     }
  //     x = (offsetX / zoomer.offsetWidth) * 100
  //     y = (offsetY / zoomer.offsetHeight) * 100
  //     zoomer.style.backgroundPosition = x + '% ' + y + '%'
  //   }
  //   $(document).mousemove(function (e) {
  //     var x = e.clientX
  //     var y = e.clientY

  //     var x = e.clientX
  //     var y = e.clientY

  //     var imgx1 = $('.slideshow-items.active').offset()?.left
  //     var imgx2 = $('.slideshow-items.active').outerWidth() + imgx1
  //     var imgy1 = $('.slideshow-items.active').offset()?.top
  //     var imgy2 = $('.slideshow-items.active').outerHeight() + imgy1

  //     if (x > imgx1 && x < imgx2 && y > imgy1 && y < imgy2) {
  //       $('#lens').show()
  //       $('#result').show()
  //       imageZoom($('.slideshow-items.active'), $('#result'), $('#lens'))
  //     } else {
  //       $('#lens').hide()
  //       $('#result').hide()
  //     }
  //   })

  //   function imageZoom(img, result, lens) {
  //     result.width(img.innerWidth())
  //     result.height(img.innerHeight())
  //     lens.width(img.innerWidth() / 2)
  //     lens.height(img.innerHeight() / 2)

  //     result.offset({ top: img.offset().top, left: img.offset().left + img.outerWidth() + 10 })

  //     var cx = img.innerWidth() / lens.innerWidth()
  //     var cy = img.innerHeight() / lens.innerHeight()

  //     result.css('backgroundImage', 'url(' + img.attr('src') + ')')
  //     result.css('backgroundSize', img.width() * cx + 'px ' + img.height() * cy + 'px')

  //     lens.mousemove(function (e) {
  //       moveLens(e)
  //     })
  //     img.mousemove(function (e) {
  //       moveLens(e)
  //     })
  //     lens.on('touchmove', function () {
  //       moveLens()
  //     })
  //     img.on('touchmove', function () {
  //       moveLens()
  //     })

  //     function moveLens(e) {
  //       var x = e.clientX - lens.outerWidth() / 2
  //       var y = e.clientY - lens.outerHeight() / 2
  //       if (x > img.outerWidth() + img.offset().left - lens.outerWidth()) {
  //         x = img.outerWidth() + img.offset().left - lens.outerWidth()
  //       }
  //       if (x < img.offset().left) {
  //         x = img.offset().left
  //       }
  //       if (y > img.outerHeight() + img.offset().top - lens.outerHeight()) {
  //         y = img.outerHeight() + img.offset().top - lens.outerHeight()
  //       }
  //       if (y < img.offset().top) {
  //         y = img.offset().top
  //       }
  //       lens.offset({ top: y, left: x })
  //       result.css(
  //         'backgroundPosition',
  //         '-' + (x - img.offset().left) * cx + 'px -' + (y - img.offset().top) * cy + 'px'
  //       )
  //     }
  //   }
  // }, [])

  function changeSliderr(e, i) {
    changeSlide(i)
  }

  function changeSlide(elm) {
    $('.slideshow-items').removeClass('active')
    $('.slideshow-items').eq(elm).addClass('active')
    $('.slideshow-thumbnails').removeClass('active')
    $('.slideshow-thumbnails').eq(elm).addClass('active')
  }

  async function addToWishlist() {
    let body = {
      user_id: user.id,
      product_id: id
    }
    let res = await handlePostAPI('/wishlist/add-wishlist', body, 'Product Added to Your Wishlist')
    if (res) {
      router.push('/cart')
    }
  }

  async function checkVariation() {
    // variation: `${selectedSize},${selectedColor}`,
    let body = {
      size: selectedSize,
      color: selectedColor,
      product_id: id
    }
    let res = await handlePostAPI('/productvariation/get-variant', body, null)
    if (res) {
      setVariant(res?.data)
    }
  }

  async function validateCart() {
    if (productdata?.ProductvariantEntities?.length && !variant?.sku) {
      toast.error('Please Select a Variant')
      // eslint-disable-next-line
      return
    }

    let body = {
      product_id: id,
      sku: variant?.sku || productdata?.sku_id,
      quantity: qty
    }
    dispatch(addToCart(body)).then(res => {
      router.push('/cart')
    })
  }

  useEffect(() => {
    if (selectedColor || selectedSize) {
      checkVariation()
    }
  }, [selectedColor, selectedSize])

  useEffect(() => {
    if (productdata?.ProductvariantEntities?.length > 0) {
      let initialVar = productdata?.ProductvariantEntities[0]
      setSelectedColor(initialVar?.ColorsEntity?.id)
      setSelectedSize(initialVar?.SizeEntity?.id)
    }
  }, [productdata?.ProductvariantEntities])

  if (loading) {
    return <FallbackSpinner />
  }

  return (
    <>
      <BreadCrumb path='Product Detail' />
      <section>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 col-md-4 col-sm-12'>
              <div className='product_image'>
                {/* <div id='lens'></div> */}

                {/* <div
                
                //  id='slideshow-items-container' 
                // className='zoom-container'
                > */}
                {productdata?.ProductImageEntities?.map((item, i) => (
                  <ReactImageMagnify
                    fadeDurationInMs={500}
                    key={i}
                    style={{
                      display: 'inline-block',
                      position: 'relative',
                      // margin: 'auto 0',
                      // padding: '0.5rem',
                      borderRadius: ' 0px',
                      border: '1px solid #c1c1c1',
                      background: '#E9E9E9',
                      marginTop: '2rem',
                      maxHeight: '500px',
                      width: '500px'
                    }}
                    imageStyle={{
                      objectFit: 'contain',
                      maxHeight: '400px',
                      width: 'auto',
                      margin: '0 auto',
                      maxWidth: '100%'
                    }}
                    lensStyle={{
                      backgroundColor: '#fff'
                    }}
                    enlargedImageContainerStyle={{
                      backgroundColor: '#fff'
                    }}
                    {...{
                      smallImage: {
                        alt: 'Wristwatch by Ted Baker London',
                        isFluidWidth: true,
                        src: item?.key ? mediaUrl + item?.key : '/images/1.png'
                      },
                      largeImage: {
                        src: item?.key ? mediaUrl + item?.key : '/images/1.png',
                        width: 1200,
                        height: 1800
                      },
                      enlargedImageContainerStyle: {
                        zIndex: '999'
                      },
                      enlargedImagePosition: 'right',
                      lensStyle: { backgroundColor: 'rgba(0,0,0,.6)' },
                      enlargedImageContainerDimensions: {
                        width: '100%',
                        height: '100%'
                      }
                    }}
                    className={` 
                      // slideshow-items ${i === 0 ? 'active' : ''}
                      `}
                  />
                ))}

                {/* {productdata?.ProductImageEntities?.map((item, i) => (
                    <img
                      key={i}
                      className={`slideshow-items ${i === 0 ? 'active' : ''}`}
                      src={item?.key ? mediaUrl + item?.key : '/images/1.png'}
                      alt=''
                    />
                  ))}  */}
                {/* </div> */}

                {/* <div id='result'></div> */}

                <div className='row justify-content-center'>
                  {productdata?.ProductImageEntities?.map((item, i) => {
                    return (
                      <img
                        key={i}
                        onMouseOver={e => changeSliderr(e, i)}
                        className={`slideshow-thumbnails ${i === 0 ? 'active' : ''}`}
                        src={item?.key ? mediaUrl + item?.key : '/images/1.png'}
                        alt=''
                      />
                    )
                  })}
                </div>
              </div>
            </div>
            <div className='col-lg-6 col-md-8 col-sm-12'>
              <div className='product-detailing-corner'>
                <div className='name-code'>
                  <h4>{productdata?.name || ''}</h4>
                  <p>{productdata?.shortDescription}</p>
                  <p>
                    Product Code: <span className='product-codes color_blue'>{productdata?.sku_id}</span>
                  </p>
                </div>
                <div className='price-taxas'>
                  <h4>€{productdata?.price}</h4>
                  <span>Inclusive of all taxes</span>
                </div>
                <div className='description'>
                  <h3>Description</h3>
                  <ul className='ps-3'>
                    {desc?.map((item, i) => (
                      <li key={i}>{item?.value}</li>
                    ))}
                  </ul>
                </div>
                <div className='option-wrapper'>
                  {productDetail?.productAttribute?.size?.length ? (
                    <>
                      <h3>Select Size</h3>
                      <div className='size_number'>
                        <form>
                          <div className='form-check'>
                            {productDetail?.productAttribute?.size?.map((item, i) => (
                              <Fragment key={i}>
                                <input
                                  className='form-check-input'
                                  type='radio'
                                  checked={selectedSize === item?.id}
                                  name='flexRadioDefault'
                                  id={'flexRadioDefault' + (i + 1)}
                                />
                                <label
                                  onClick={() => setSelectedSize(item?.id)}
                                  className='form-check-label'
                                  for={'flexRadioDefault' + (i + 1)}
                                >
                                  {item?.name}
                                </label>
                              </Fragment>
                            ))}
                          </div>
                        </form>
                      </div>
                    </>
                  ) : null}

                  {/* <div className='size-chart'>
                    <a href='' className='size-chart' data-bs-toggle='modal' data-bs-target='#exampleModal'>
                      Size Chart
                    </a>
                  </div> */}
                  {productDetail?.productAttribute?.color?.length > 0 ? (
                    <>
                      <h3>Select Color</h3>
                      <ul className='color_choice'>
                        {productDetail?.productAttribute?.color?.map((item, i) => (
                          <li
                            key={i}
                            onClick={() => setSelectedColor(item?.id)}
                            className={selectedColor === item?.id ? 'selected' : ''}
                            style={{ background: item?.code }}
                          >
                            <a role='button' className='choice_color_one'></a>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : null}
                </div>

                {variant?.sku === null ? <p className='text-danger'> This Variant is Out of stock</p> : null}

                <div className='quantity-via-wishlist'>
                  <div className='quantity'>
                    <form>
                      <div className='input-group align-items-center justify-content-center qty_input'>
                        <button onClick={handleDecrease} className='btn minus ' type='button'></button>

                        <input
                          type='text'
                          value={qty}
                          disabled
                          className='form-control add_input text_cart'
                          placeholder=''
                          aria-label='Example text with two button addons'
                        />
                        <button onClick={handleIncrease} className='btn pluse' type='button'></button>
                      </div>
                    </form>
                  </div>
                  <div className='wishlist'>
                    <a role='button' onClick={addToWishlist} className='wishlist-link'>
                      <span className='material-symbols-rounded'>
                        <Icon icon='mdi:heart-outline' />
                      </span>{' '}
                      Add to Wishlist
                    </a>
                  </div>
                </div>
                <div className='checkout btn_group'>
                  <a role='button' onClick={validateCart} className='btn gradiant_button'>
                    Add to Cart
                  </a>
                  {/* <a href='billing-details.html' className='btn btn-outline-secondary'>
                    Buy Now
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!--featured Items--> */}
      <div className='featured-items'>
        <div className='container'>
          <div className='featured-title'>
            <h3>Featured Products</h3>
            <Link href='/search/a' className='view-all'>
              View all
            </Link>
          </div>
          <div className='row'>
            {productDetail?.relatedProduct?.map((item, i) => {
              if (item?.id == id) return

              return (
                <div key={i} className='col-md-3'>
                  <FeaturedListCard i={i} mediaUrl={mediaUrl} item={item} />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductDetail
