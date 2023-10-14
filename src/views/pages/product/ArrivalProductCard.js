import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { doNothing } from 'src/api-requests'
import { useDispatch } from 'src/store'
import { addToCart } from 'src/store/apps/product'

const ArrivalProductCard = ({ item, mediaUrl }) => {
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
    <div className='bg_white'>
      <div className='arrivals_products new_product '>
        <div className='sale_button'>On Sale Product </div>
        <Link href={`/product-detail/${item?.id}`} className='arrivals_product new_product_img'>
          <img
            src={
              item?.ProductImageEntities?.length
                ? `${mediaUrl}${item?.ProductImageEntities[0]?.key}`
                : 
                `/images/p-new-arrival-2.png`
            }
            className='img-fluid'
            alt=''
          />
        </Link>
      </div>
      <div className='arriavls-product-details new_product_detail'>
        <Link href={`/product-detail/${item?.id}`}>{item?.name || 'Amazing jewellery collection'}</Link>

        <div className='price_listing'>
          {/* <s>$500.00</s> */}
          <p>€{item?.price}</p>
        </div>
      </div>
    </div>
  )
}

export default ArrivalProductCard
