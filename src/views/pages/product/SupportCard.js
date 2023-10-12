import React from 'react'

const SupportCard = ({ item }) => {
  return (
    <div className='support_fields_container showing_border_container'>
      <ul>
        <li>
          <span>
            <img src={item?.img || '/images/delivery-van.png'} className='img-fluid' alt='' />
          </span>
          <figure>
            <h5>{item?.title || 'Free Delivery'}</h5>
            <p>{item?.subtitle || 'For all order over $99'}</p>
          </figure>
        </li>
      </ul>
    </div>
  )
}

export default SupportCard
