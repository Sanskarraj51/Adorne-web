import React from 'react'
import ArrivalProductCard from '../product/ArrivalProductCard'
import { fakeProducts } from 'src/@core/FakeData'

const NewArrival = ({ data, mediaUrl }) => {
  return (
    <section class='latest_products'>
      <div class='container'>
        <div class='arrivals'>
          <h4>New Arrival</h4>
          <div class='row'>
            {data?.slice(0, 4)?.map((item, i) => (
              <div key={i} className='col-lg-3 col-md-6 col-sm-6 mt-4 text-center pt-4 pb-4'>
                <ArrivalProductCard mediaUrl={mediaUrl} item={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default NewArrival
