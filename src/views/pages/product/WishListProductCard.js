import { CircularProgress } from '@mui/material'
import Link from 'next/link'
import React, { useState } from 'react'
import { doNothing, handlePostAPI } from 'src/api-requests'
import { useAuth } from 'src/hooks/useAuth'
import { useDispatch } from 'src/store'

const WishListProductCard = ({ wishList, mediaUrl, openDelete, getCartData }) => {
  let item = wishList.ProductEntity
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()
  const { user } = useAuth()

  async function moveToCart() {
    setLoading(true)
    // eslint-disable-next-line
    let body = {
      wishlist_id: wishList?.id,
      user_id: user?.id,
      sku: 'PLAY1'
    }
    // eslint-disable-next-line
    let res = await handlePostAPI(`/cart/move-to-cart`, body, `Product moved to Your Cart`)
    if (res) {
      getCartData()
    }
    setLoading(false)
  }

  return (
    <div className='main-items'>
      <div className='item_backgrounds'>
        <Link href={`/product-detail/${item?.id}`} className='item_products'>
          <img
            src={
              item?.ProductImageEntities?.length
                ? `${mediaUrl}${item?.ProductImageEntities[0]?.key}`
                : `/images/img-1.png`
            }
            className='img-fluid'
            alt='Item Image'
          />
        </Link>
        <div className='wish_cart_footer'>
          <a role='button' onClick={moveToCart} className='btn gradiant_button'>
            {loading ? <CircularProgress color='inherit' size={30} /> : 'Move to Cart'}
          </a>
          <a role='button' onClick={() => openDelete(wishList?.id, 'wish')} className='btn notify_btn'>
            <img src='/images/ic_delete.svg' alt='' className='img-fluid' />
          </a>
        </div>
      </div>
      <div className='item_details'>
        <div className='subtitle'>
          <div className='subheader'>
            <span>{item?.category || ''}</span>
          </div>
          <div className='item_ratings'>
            <ul className='review_star'>
            {[...Array(5)].map((star, index) => {
                index += 1
                let rating = item?.RatingEntities?.length ? item?.RatingEntities[0]?.averageRating : 0

                return (
                  <li key={index} className='filled'>
                    <img
                      src={`/images/start-${index <= rating ? 'fill' : 'unfill'}.svg`}
                      alt=''
                      className='img-fluid'
                    />
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
        <div className='arriavls-product-details'>
          <Link href={`/product-detail/${item?.id}`}>{item?.name || 'Wireless X-15'}</Link>
          <div className='price_listing'>
            {/* <s>${item?.discountPrice}</s> */}
            <p>€{item?.price}</p>
          </div>

          <ul className='color_choice'>
            {item?.color?.map((item, i) => (
              <li key={i} className={i === 0 ? 'active' : ''}>
                <a role='button' onClick={doNothing} className='choice_color_one'></a>
              </li>
            ))}
            {/* <li className='active'>
              <a href='' onClick={doNothing} className='choice_color_one'></a>
            </li>
            <li>
              <a href='' onClick={doNothing} className='choice_color_two'></a>
            </li>
            <li>
              <a href='' onClick={doNothing} className='choice_color_three'></a>
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default WishListProductCard
