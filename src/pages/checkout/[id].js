import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import BreadCrumb from 'src/@core/components/breadcrumb'
import { handlePostAPI } from 'src/api-requests'
import { useDispatch, useSelector } from 'src/store'
import { fetchCartData } from 'src/store/apps/product'
import { fetchAddress } from 'src/store/apps/user'
import CustomModal from 'src/views/pages/common/CustomModa'
import Addresses from 'src/views/pages/profile/addresses'

const Checkout = () => {
  const [loading, setLoading] = useState('')
  const [selectedAdd, setSelectedAddr] = useState({})
  const [selected, setSelected] = useState('')
  const [addressNew, settAddressNew] = useState(false)

  const dispatch = useDispatch()
  const userStore = useSelector(state => state.user)
  const store = useSelector(state => state.product)

  const router = useRouter()
  const { id } = router.query

  useEffect(() => {
    if (id) {
      dispatch(fetchAddress(id))
    }
  }, [dispatch, id])

  useEffect(() => {
    if (userStore?.address?.length > 0) {
      let addr = {}
      for (let i of userStore?.address) {
        if (i?.isDefault === 1) {
          addr = i
        }
      }
      setSelectedAddr(addr)
    }
  }, [userStore?.address])

  async function checkout() {
    let bodyData = {
      user_id: id,
      total: store?.cartData?.total,
      shipping_id:selectedAdd?.id
    }

    const res = await handlePostAPI('/orders/place-order', bodyData, 'Order Placed Successfully')

    if (res) {
      router.push(`/confirm-order/${res?.data?.id}`)
      dispatch(fetchCartData())
    }
  }

  function openAddress() {
    settAddressNew(!addressNew)
  }

  return (
    <>
      <BreadCrumb path='Shipping' />
      <div class='container mt-4 mb-5'>
        <div class='row'>
          <div class='col-lg-8 col-md-8 col-sm-12'>
            <div class='saved-address'>
              <h4>Delivery address</h4>
            </div>
            <div class='enter-address-detail'>
              <div class='address'>
                <h6>{selectedAdd?.address_type || 'Home'}</h6>
                <p>
                  {selectedAdd?.address1}, {selectedAdd?.city}, {selectedAdd?.state}, {selectedAdd?.country} M.{' '}
                  {selectedAdd?.phone}
                </p>
              </div>
              <div class='action-details'>
                <a role='button' onClick={openAddress} class='btn-edited'>
                  Change
                </a>
              </div>
            </div>

            <div class='select-payment-container'>
              <div class='saved-address'>
                <h4>Select Payment option</h4>
                <a role='button' class='btn gradiant_button using-address'>
                  Use This Payment Method
                </a>
              </div>
              <div class='row justify-content-start'>
                <div class='col-lg-6 col-md-6 col-sm-12'>
                  <div class='choose-payment-method'>
                    <div class='saved-address-manual'>
                      <div class='label-tags'>
                        <p>
                          <input type='radio' id='test1' name='radio-group' checked />
                          <label for='test1'>COD</label>
                        </p>
                      </div>
                    </div>
                    {/* <div class='card-labels'>
                      <ul>
                        <li>
                          <a href='' class=''>
                            <img alt='' src='/images/card-1.png' class='img-fluid' />
                          </a>
                        </li>
                        <li>
                          <a href='' class=''>
                            <img alt='' src='/images/card-2.png' class='img-fluid' />
                          </a>
                        </li>
                        <li>
                          <a href='' class=''>
                            <img alt='' src='/images/card-3.png' class='img-fluid' />
                          </a>
                        </li>
                      </ul>
                    </div>

                    <div class='new-card-fields-detail'>
                      <div class='row'>
                        <div class='col-lg-12 col-md-12 col-sm-12'>
                          <div class='card-number'>
                            <label for='username'>Card Number</label>
                            <input
                              name='credit-number'
                              class='cc-number'
                              type='tel'
                              maxlength='19'
                              placeholder='Card Number'
                            />
                          </div>
                        </div>
                        <div class='col-lg-6 col-md-6 col-sm-6'>
                          <div class='card-number'>
                            <label for='username'>Expiry Date</label>
                            <input
                              name='credit-expires'
                              class='cc-expires'
                              type='tel'
                              maxlength='7'
                              placeholder='MM / YY'
                            />
                          </div>
                        </div>
                        <div class='col-lg-6 col-md-6 col-sm-12'>
                          <div class='card-number'>
                            <label for='username'>CVV</label>
                            <input name='credit-cvc' class='cc-cvc' type='tel' maxlength='4' placeholder='CVC' />
                          </div>
                        </div>
                        <div class='col-lg-12 col-md-12 col-sm-12'>
                          <div class='card-number'>
                            <label for='username'>Card Holder Name</label>
                            <input name='card-holder' class='card-holder' type='text' placeholder='Card Holder Name' />
                          </div>
                        </div>
                      </div>
                    </div> */}

                    <div class='other-option'>
                      <div class='label-tags'>
                        <p>
                          <input type='radio' id='test1' name='radio-group' />
                          <label for='test1'>Net Banking</label>
                        </p>
                        <p>
                          <input type='radio' id='test1' name='radio-group' />
                          <label for='test1'>Cash on Delivery</label>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class='col-lg-4 col-md-4 col-sm-12'>
            <div class='cart-page-billing'>
              <div class='title'>
                <h3>Order Summary (2)</h3>
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
                <div class='checkout'>
                  <Link href='/' class='btn gradiant_button'>
                    Continue Shopping
                  </Link>
                  <a role='button' onClick={checkout} class='btn primary-button'>
                    Place Order
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CustomModal size='md' open={addressNew} closeDialog={() => settAddressNew(false)} title={'Select Address'}>
        <Addresses
          popup={true}
          setSelected={setSelected}
          closeModal={openAddress}
          selected={selected}
          place='billing'
        />
      </CustomModal>
    </>
  )
}

export default Checkout
