import { CircularProgress } from '@mui/material'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import BreadCrumb from 'src/@core/components/breadcrumb'
import FallbackSpinner from 'src/@core/components/spinner'
import { handlePostAPI } from 'src/api-requests'
import { useAuth } from 'src/hooks/useAuth'
import { useDispatch, useSelector } from 'src/store'
import { fetchOrders } from 'src/store/apps/user'

const StarRating = ({ item, id, user,mediaUrl }) => {
  const [loading, setLoading] = useState(false)
  const [rating, setRating] = useState(5)
  const [hover, setHover] = useState(0)

  async function saveRating() {
    let body = {
      rating: rating,
      user_id: user
    }

    let url = `/rating/products/${item?.ProductEntity?.id}/ratings`

    const res = await handlePostAPI(url, body)
  }

  return (
    <div class='row'>
      <div class='rateing_order_info'>
        <figure>
          <a class='product-image' href='Producr-details.html'>
            <img
              src={
                item?.ProductEntity.ProductImageEntities?.length
                  ? `${mediaUrl}${item?.ProductEntity?.ProductImageEntities[0]?.key}`
                  : `/images/east-1.jpg`
              }
              class='img-fluid'
              alt=''
            />
          </a>
        </figure>
        <span>
          <h4>{item?.ProductEntity?.name || ''}</h4>
          <p>
            Product Code: <span class='product-code'>{item?.ProductEntity?.sku_id || ''}</span>
          </p>
        </span>
      </div>
      <div class='rate_order'>
        <div class='total_rating'>
          <h5>Overall Rating</h5>
          <div className='star-rating'>
            {[...Array(5)].map((star, index) => {
              index += 1

              return (
                <button
                  type='button'
                  key={index}
                  className={index <= (hover || rating) ? 'on' : 'off'}
                  onClick={() => setRating(index)}
                  onMouseEnter={() => setHover(index)}
                  onMouseLeave={() => setHover(rating)}
                >
                  <span className='star'>&#9733;</span>
                </button>
              )
            })}
          </div>
        <a role='button' onClick={saveRating} class='btn gradiant_button'>
          {loading ? <CircularProgress size={30} color='inherit' /> : 'Submit'}{' '}
        </a>
        </div>

      </div>
    </div>
  )
}

// /products/:product_id/ratings

const Ratings = () => {
  const [loading, setLoading] = useState('')
  const [data, setData] = useState({})
  const dispatch = useDispatch()
  const { orders, mediaUrl } = useSelector(state => state.user)
  const { user } = useAuth()
  const router = useRouter()
  const { id } = router.query

  async function getOrdersData() {
    setLoading(true)
    await dispatch(fetchOrders(user?.id))
    setLoading(false)
  }
  useEffect(() => {
    if (user?.id) {
      getOrdersData()
    }
  }, [dispatch, user?.id])

  useEffect(() => {
    if (id && orders?.length) {
      let val = orders?.find(item => item.id == id)

      setData(val)
    }
  }, [id, orders])

  if (loading) {
    return <FallbackSpinner />
  }

  return (
    <>
      <BreadCrumb path='Ratings' />
      <div class='container mt-4 mb-5'>
        {data?.OrderitemEntities?.map((item, i) => (
          <StarRating key={i} item={item} id={id} user={user?.id} mediaUrl={mediaUrl} />
        ))}
      </div>
    </>
  )
}

export default Ratings
