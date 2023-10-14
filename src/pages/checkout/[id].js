import { Icon } from '@iconify/react'
import { IconButton } from '@mui/material'
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
      shipping_id: selectedAdd?.id
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
      <div className='container mt-4 mb-5'>
        <div className='row'>
          <div className='col-lg-8 col-md-8 col-sm-12'>
            <div className='saved-address'>
              <h4>Delivery address</h4>
            </div>
            <div className='enter-address-detail'>
              <div className='address'>
                <h6>{selectedAdd?.address_type || 'Home'}</h6>
                <p>
                  {selectedAdd?.address1}, {selectedAdd?.city}, {selectedAdd?.state}, {selectedAdd?.country} M.{' '}
                  {selectedAdd?.phone}
                </p>
              </div>
              <div className='action-details'>
                <a role='button' onClick={openAddress} className='btn-edited'>
                  Change
                </a>
              </div>
            </div>

            <div className='select-payment-container'>
              <div className='saved-address'>
                <h4>Select Payment option</h4>
                <a role='button' className='btn gradiant_button using-address'>
                  Use This Payment Method
                </a>
              </div>
              <div className='row justify-content-start'>
                    <h6 style={{ color: '#86533C' }} className='w-100'>
                      Payment is Under Development. Kindly place Order using Whatsapp and Instragram
                    </h6>

                    <div className='d-flex '>
                      <a target='_blank' href='https://wa.me/+31633386607'>
                        <IconButton sx={{ bgcolor: '#0cc144', borderRadius: '4px', marginRight: '5px' }}>
                          <Icon color='white' icon='mdi:whatsapp' />
                        </IconButton>
                      </a>
                      <a
                        className='footer-hiring-btn2'
                        target='_blank'
                        href='https://www.instagram.com/contact_adorne/'
                      >
                        <IconButton
                          sx={{
                            bgcolor: 'white',
                            borderRadius: '4px',

                            boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'
                          }}
                        >
                          <img alt='' src='/images/instagram.png' />
                        </IconButton>
                      </a>
                    </div>
                <div className='col-lg-6 col-md-6 col-sm-12'>
                  <div className='choose-payment-method'>
                    {/* <div className='saved-address-manual'>
                      <div className='label-tags'>
                        <p>
                          <input type='radio' id='test1' name='radio-group' checked />
                          <label for='test1'>COD</label>
                        </p>
                      </div>
                    </div> */}
                    {/* <div className='card-labels'>
                      <ul>
                        <li>
                          <a href='' className=''>
                            <img alt='' src='/images/card-1.png' className='img-fluid' />
                          </a>
                        </li>
                        <li>
                          <a href='' className=''>
                            <img alt='' src='/images/card-2.png' className='img-fluid' />
                          </a>
                        </li>
                        <li>
                          <a href='' className=''>
                            <img alt='' src='/images/card-3.png' className='img-fluid' />
                          </a>
                        </li>
                      </ul>
                    </div>

                    <div className='new-card-fields-detail'>
                      <div className='row'>
                        <div className='col-lg-12 col-md-12 col-sm-12'>
                          <div className='card-number'>
                            <label for='username'>Card Number</label>
                            <input
                              name='credit-number'
                              className='cc-number'
                              type='tel'
                              maxlength='19'
                              placeholder='Card Number'
                            />
                          </div>
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-6'>
                          <div className='card-number'>
                            <label for='username'>Expiry Date</label>
                            <input
                              name='credit-expires'
                              className='cc-expires'
                              type='tel'
                              maxlength='7'
                              placeholder='MM / YY'
                            />
                          </div>
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-12'>
                          <div className='card-number'>
                            <label for='username'>CVV</label>
                            <input name='credit-cvc' className='cc-cvc' type='tel' maxlength='4' placeholder='CVC' />
                          </div>
                        </div>
                        <div className='col-lg-12 col-md-12 col-sm-12'>
                          <div className='card-number'>
                            <label for='username'>Card Holder Name</label>
                            <input name='card-holder' className='card-holder' type='text' placeholder='Card Holder Name' />
                          </div>
                        </div>
                      </div>
                    </div> */}

                    {/* <div className='other-option'>
                      <div className='label-tags'>
                        <p>
                          <input type='radio' id='test1' name='radio-group' />
                          <label for='test1'>Net Banking</label>
                        </p>
                        <p>
                          <input type='radio' id='test1' name='radio-group' />
                          <label for='test1'>Cash on Delivery</label>
                        </p>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-4 col-md-4 col-sm-12'>
            <div className='cart-page-billing'>
              <div className='title'>
                <h3>Order Summary (2)</h3>
              </div>
              <div className='gift-card-promos'>
                <div className='subtotal-title'>
                  <h4>Product</h4>
                  <h4>Subtotal</h4>
                </div>
                <div className='subtotal-product-detail'>
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
                <div className='cart-additional-detail'></div>
                <div className='subtotal-payments'>
                  <ul>
                    <li>
                      <figure>Subtotal</figure>
                      <span>${store?.cartData?.total ? store?.cartData?.total : 0}</span>
                    </li>
                    <li>
                      <figure>Delievery Charges</figure>
                      <span>${store?.cartData?.shippingCharges || 0}</span>
                    </li>
                    <li className='final-billing'>
                      <figure>Total</figure>
                      <span>${store?.cartData?.total ? store?.cartData?.total : 0}</span>
                    </li>
                  </ul>
                </div>
                <div className='checkout'>
                  <Link href='/' className='btn gradiant_button'>
                    Continue Shopping
                  </Link>
                  <button role='button' disabled onClick={checkout} className='btn primary-button'>
                    Place Order
                  </button>
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
