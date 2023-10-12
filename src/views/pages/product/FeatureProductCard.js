import { useRouter } from 'next/router'
import React from 'react'
import { doNothing } from 'src/api-requests'

const FeatureProductCard = ({ item, mediaUrl }) => {
  const router = useRouter()

  return (
    <div onClick={() => router.push(`/product-detail/${item?.id}`)} className='feature_colum_1'>
      <ul>
        <li>
          <span>
            <img
              src={
                item?.ProductImageEntities?.length
                  ? `${mediaUrl}${item?.ProductImageEntities[0]?.key}`
                  : `/images/bag/bag-1.png`
              }
              className='img-fluid'
              alt=''
            />
          </span>
          <figure>
            <a onClick={doNothing} href='#0'>
              {item?.name || 'Wireless X-15'}
            </a>
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
            <div className='price_lists'>
              {/* <s>${item?.discountPrice}</s> */}
              <p>€{item?.price}</p>
            </div>
          </figure>
        </li>
      </ul>
    </div>
  )
}

export default FeatureProductCard
