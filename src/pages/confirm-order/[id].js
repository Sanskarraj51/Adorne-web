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

      <section class='login main'>
        <div class='container'>
          <div class='row login_flex'>
            <div class='col-12'>
              <figure class='mb-4'>
                <img src='/images/order-confirmed.svg' alt='login' class='img-fluid' />
              </figure>
            </div>
            <div class='col-12'>
              <div class='order_confirmed'>
                <h3>Order Confirmed</h3>
                <a href='#0' class='link p-0'>
                  Order ID #{id}
                </a>
                <p class='text-center'>
                  Your order is placed successfully. We Will send you a email with order details shorlty to your
                  registered email address
                </p>
                <Link href='/' class='btn gradiant_button'>
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
