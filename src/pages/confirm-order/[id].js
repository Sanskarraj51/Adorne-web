import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import BreadCrumb from 'src/@core/components/breadcrumb'

const ConfirmOrder = () => {
  const router = useRouter()
  const { id } = router.query
  // eslint-disable-next-line
  return (
    <>
      <BreadCrumb path='Order Confirmed' />

      <section className='login main'>
        <div className='container'>
          <div className='row login_flex'>
            <div className='col-12'>
              <figure className='mb-4'>
                <img src='/images/order-confirmed.svg' alt='login' className='img-fluid' />
              </figure>
            </div>
            <div className='col-12'>
              <div className='order_confirmed'>
                <h3>Order Confirmed</h3>
                <a href='#0' className='link p-0'>
                  Order ID #{id}
                </a>
                <p className='text-center'>
                  Your order is placed successfully. We Will send you a email with order details shorlty to your
                  registered email address
                </p>
                <Link href='/' className='btn gradiant_button'>
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ConfirmOrder
