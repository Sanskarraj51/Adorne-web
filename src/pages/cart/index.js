import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import BreadCrumb from 'src/@core/components/breadcrumb'
import { handleGetAPI } from 'src/api-requests'
import { useAuth } from 'src/hooks/useAuth'
import { useDispatch, useSelector } from 'src/store'
import { fetchCartData, fetchWishListData } from 'src/store/apps/product'
import ConfirmModal from 'src/views/pages/common/confirmModal'
import CartProductCard from 'src/views/pages/product/CartProductCard'
import WishListProductCard from 'src/views/pages/product/WishListProductCard'

const Cart = () => {
  const [loading, setLoading] = useState('')

  const dispatch = useDispatch()
  const [deletId, setDeleteId] = useState('')
  const [deletType, setDeleteType] = useState('cart')
  const [deletShow, setDeleteShow] = useState(false)
  const store = useSelector(state => state.product)
  const { user } = useAuth()
  async function getCartData() {
    setLoading(true)
    await dispatch(fetchCartData())
    dispatch(fetchWishListData())
    setLoading(false)
  }

  useEffect(() => {
    getCartData()
  }, [dispatch])

  function openDelete(data, type) {
    setDeleteId(data)
    setDeleteShow(true)
    setDeleteType(type)
  }

  function handleClose() {
    setDeleteId('')
    setDeleteShow(false)
  }

  async function removeFromWishlist() {
    setLoading(true)
    // eslint-disable-next-line
    let url =
      deletType === 'cart' ? '/cart/remove-product-from-cart?cart_id=' : '/wishlist/remove-wishlist?wishlist_id='
    // eslint-disable-next-line
    let res = await handleGetAPI(
      url + deletId,
      `Product removed from Your ${deletType === 'cart' ? 'Cart' : 'Wishlist'}`
    )
    if (res) {
      getCartData()
      setDeleteShow(false)
    }
    setLoading(false)
  }

  return (
    <>
      <BreadCrumb path='Cart' />
      <div className='container mt-4 mb-5'>
        <div className='row'>
          {store?.cartData?.products?.length > 0 ? (
            <>
              <div className='col-lg-8 col-md-12 col-sm-12 mb-3'>
                <div className='cart-table-product-detail'>
                  <table className='product-detail-tables'>
                    <thead>
                      <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Subtotal</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {store?.cartData?.products?.map((item, i) => (
                        <CartProductCard
                          openDelete={openDelete}
                          getCart={getCartData}
                          mediaUrl={store?.cartData?.mediaUrl}
                          cart={item}
                          key={item}
                        />
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className='col-lg-4 col-md-12 col-sm-12'>
                <div className='cart-page-billing'>
                  <div className='title'>
                    <h3>Order Summary ({store?.cartData?.products?.length || 0})</h3>
                  </div>
                  <div className='gift-card-promos'>
                    <div className='subtotal-payments'>
                      <ul>
                        <li>
                          <figure>Subtotal</figure>
                          <span>€{store?.cartData?.total || 0}</span>
                        </li>
                        <li>
                          <figure>Shipping</figure>
                          <span>€{store?.cartData?.shippingCharges || 0}</span>
                        </li>
                        <li className='final-billing'>
                          <figure>Total</figure>
                          <span>€{store?.cartData?.total || 0}</span>
                        </li>
                      </ul>
                    </div>
                    <div className='checkout btn_group'>
                      <Link href='/' className='btn gradiant_button'>
                        Continue Shopping
                      </Link>
                      <Link href={`/billing/${user?.id}`} className='btn primary-button'>
                        Proceed to Checkout
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <p>Your Cart is Empty , Please Add some products!</p>
          )}
        </div>
      </div>

      {/* <!--cart detail table--> */}
      <section className='popular_items mt-4 mb-4'>
        <div className='container'>
          <div className='row align-items-center popular_titles'>
            <div className='col-6'>
              <div className='popular_ite_title'>
                <h4>Wish List</h4>
              </div>
            </div>
          </div>
          {store?.wishListData?.posts?.length > 0 ? (
            <div className='row mt-3'>
              {store?.wishListData?.posts?.slice(0, 4)?.map((item, i) => (
                <div key={item} className='col-lg-3 col-md-6 col-sm-6 mt-3'>
                  <WishListProductCard
                    getCartData={getCartData}
                    openDelete={openDelete}
                    mediaUrl={store?.wishListData?.mediaUrl}
                    wishList={item}
                  />
                </div>
              ))}
            </div>
          ) : (
            <p className='mt-4'>Your Wishlist is Empty!</p>
          )}
        </div>
      </section>

      <ConfirmModal handleClose={handleClose} open={deletShow} deleteFunction={removeFromWishlist} loading={loading} />
    </>
  )
}

Cart.authGuard = true

export default Cart
