import { useRouter } from 'next/router'
import React from 'react'

const FeaturedListCard = ({ item, mediaUrl, i }) => {
  const router = useRouter()

  return (
    <div onClick={() => router.push(`/product-detail/${item?.id}`)} className='featured-products'>
      <img
        src={
          item?.ProductImageEntities?.length
            ? `${mediaUrl}${item?.ProductImageEntities[0]?.key}`
            : `/images/featured-${i || 1}.png`
        }
        className='img-fluid'
        alt=''
      />
      <p>{item?.name || 'Wireless X-15'}</p>
      <h4>€{item?.price}</h4>
    </div>
  )
}

export default FeaturedListCard
