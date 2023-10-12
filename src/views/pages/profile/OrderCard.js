import dayjs from 'dayjs'
import Link from 'next/link'
import React from 'react'

const statusObj = {
  1: 'Created',
  2: 'In-Transit',
  3: 'Shipped',
  4: 'Completed'
}

const OrderCard = ({ item, openInv }) => {
  return (
    <li>
      <div className='product_order'>
        <div className='order_action'>
          <div className='value_cols'>
            <span className='order_label'>Order Id</span>
            <span className='order_value'>#{item?.id || ''}</span>
          </div>
          <div className='btn_group'>
            <span className=' pending'>{statusObj[item?.status]}</span>
            {/* <Link href={'/track'} className='btn gradiant_button'>
              Track
            </Link> */}
            <Link href={`/ratings/${item?.id}`} className='btn gradiant_button'>
              Rate Now
            </Link>
            <a role='button' onClick={() => openInv(item)} className='btn gradiant_button'>
              View
            </a>
          </div>
        </div>
        <div className='order_detail'>
          <div className='order_left'>
            <div className='value_cols'>
              <span className='order_label'>Date & Time</span>
              <span className='order_value'>{dayjs(item?.createdAt).format('DD/MM/YYYY hh:mm A')}</span>
            </div>
            <div className='value_cols'>
              <span className='order_label'>Email</span>
              <span className='order_value'>{item?.AddressEntity?.email}</span>
            </div>
            <div className='value_cols'>
              <span className='order_label'>Shipping to</span>
              <span className='order_value' style={{ textTransform: 'capitalize' }}>
                {item?.AddressEntity?.address_type}
              </span>
            </div>
          </div>
          <div className='value_cols'>
            <span className='order_label'>Total</span>
            <span className='order_value'>${item?.total || 0}</span>
          </div>
        </div>
      </div>
    </li>
  )
}

export default OrderCard
