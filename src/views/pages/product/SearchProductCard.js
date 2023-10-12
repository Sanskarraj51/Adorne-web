import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { doNothing } from 'src/api-requests'
import { useDispatch } from 'src/store'
import { addToCart } from 'src/store/apps/product'

const SearchProductCard = ({ item }) => {
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
          <img src={item?.img || '/images/img-3.png'} className='img-fluid' alt='Item Image' />
        </Link>
        <div className='hover_cart_footer'>
          <a role='button' onClick={validateCart} className='btn gradiant_button'>
            Add to cart
          </a>
          <Link href='/product-detail/1' className='btn notify_btn'>
            <img src={item?.img || '/images/view.svg'} alt='view' className='img-fluid' />
          </Link>
        </div>
      </div>
      <div className='item_details'>
        <div className='subtitle'>
          <div className='subheader'>
            <span>Headphone</span>
          </div>
          <div className='item_ratings'>
            <ul className='review_star'>
              <li className='filled'>
                <span className='material-icons'>star</span>
              </li>
              <li className='filled'>
                <span className='material-icons'>star</span>
              </li>
              <li className='filled'>
                <span className='material-icons'>star</span>
              </li>
              <li className='filled'>
                <span className='material-icons'>star</span>
              </li>
              <li className='unfilled'>
                <span className='material-symbols-rounded'>star</span>
              </li>
            </ul>
          </div>
        </div>
        <div className='arriavls-product-details'>
          <h6>{item?.name || 'Wireless X-15'}</h6>
          <div className='price_listing'>
            {/* <s>${item?.discountPrice}</s> */}
            <p>€{item?.price}</p>
          </div>

          <ul className='color_choice'>
            <li className='active'>
              <a href='' onClick={doNothing} className='choice_color_one'></a>
            </li>
            <li>
              <a href='' onClick={doNothing} className='choice_color_two'></a>
            </li>
            <li>
              <a href='' onClick={doNothing} className='choice_color_three'></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default SearchProductCard
