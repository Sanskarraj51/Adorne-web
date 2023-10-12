import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { doNothing } from 'src/api-requests'
import { useDispatch } from 'src/store'
import { addToCart } from 'src/store/apps/product'

const PopularProductCard = ({ item, mediaUrl }) => {
  const dispatch = useDispatch()
  const router = useRouter()
  const [variant, setVariant] = useState({})

  async function validateCart() {
    if (item?.ProductvariantEntities?.length && !variant?.sku) {
      toast.error('This Product is Currently Out of Stock')
      // eslint-disable-next-line
      return
    }

    let body = {
      product_id: item?.id,
      sku: variant?.sku || item?.sku_id,
      quantity: 1
    }
    dispatch(addToCart(body)).then(res => {
      router.push('/cart')
    })
  }

  useEffect(() => {
    if (item?.ProductvariantEntities?.length > 0) {
      let initialVar = item?.ProductvariantEntities[0]
      setVariant(initialVar)
    }
  }, [item?.ProductvariantEntities])

  // eslint-disable-next-line
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
        <div className='hover_cart_footer'>
          <a role='button' onClick={validateCart} className='btn gradiant_button'>
            Add to cart
          </a>
          <Link href={`/product-detail/${item?.id}`} className='btn notify_btn'>
            <img src='/images/view.svg' alt='' className='img-fluid' />
          </Link>
        </div>
      </div>
      <div className='item_details'>
        <div className='subtitle'>
          <div className='subheader'>
            <span>{item?.CategoryEntity?.name || ''}</span>
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
                <a href='' onClick={doNothing} className='choice_color_one'></a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default PopularProductCard
