import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import BreadCrumb from 'src/@core/components/breadcrumb'
import { useAuth } from 'src/hooks/useAuth'
import { useSelector } from 'src/store'
import Addresses from 'src/views/pages/profile/addresses'

const Billing = () => {
  const [selected, setSelected] = useState('')
  const store = useSelector(state => state.product)
  const { user } = useAuth()
  const router = useRouter()

  return (
    <>
      <BreadCrumb path='Billing Detail' />

      <div class='container mt-4 mb-5'>
        <div class='row'>
          <Addresses setSelected={setSelected} selected={selected} place='billing' />
          <div class='col-lg-4 col-md-4 col-sm-12'>
            <div class='cart-page-billing'>
              <div class='title'>
                <h3>Order Summary ({store?.cartData?.products?.length || 0})</h3>
              </div>
              <div class='gift-card-promos'>
                <div class='subtotal-title'>
                  <h4>Product</h4>
                  <h4>Subtotal</h4>
                </div>
                <div class='subtotal-product-detail'>
                  <ul>
                    {store?.cartData?.products?.map((cart, i) => {
                      let item = cart?.ProductEntity

                      return (
                        <li key={i}>
                          <figure>{item?.name || ''}</figure>
                          <span>${Number(item?.price) * cart?.quantity}</span>
                        </li>
                      )
                    })}
                  </ul>
                </div>
                <div class='cart-additional-detail'></div>
                <div class='subtotal-payments'>
                  <ul>
                    <li>
                      <figure>Subtotal</figure>
                      <span>${store?.cartData?.total ? store?.cartData?.total : 0}</span>
                    </li>
                    <li>
                      <figure>Delievery Charges</figure>
                      <span>${store?.cartData?.shippingCharges || 0}</span>
                    </li>
                    <li class='final-billing'>
                      <figure>Total</figure>
                      <span>${store?.cartData?.total ? store?.cartData?.total : 0}</span>
                    </li>
                  </ul>
                </div>
                <div class='checkout btn_group'>
                  <Link href='/' class='btn gradiant_button'>
                    Continue Shopping
                  </Link>
                  <a
                    role='button'
                    onClick={() => {
                      if (!selected) {
                        toast.error('Please select a Shipping Address')
                        return
                      }
                      router.push(`/checkout/${user?.id}`)
                    }}
                    class='btn primary-button'
                  >
                    Proceed to Checkout
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Billing
