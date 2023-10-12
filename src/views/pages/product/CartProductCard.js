import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { doNothing, handlePostAPI } from 'src/api-requests'

const CartProductCard = ({ cart, mediaUrl, getCart,openDelete }) => {
  const [qty, setQty] = useState(0)
  let item = cart?.ProductEntity
  function handleIncrease() {
    if (qty < 5) {
      setQty(qty + 1)
      updateCart(qty + 1)
    } else {
      toast.error('Max 5 products Allowed')
    }
  }
  function handleDecrease() {
    if (qty > 1) {
      setQty(qty - 1)
      updateCart(qty - 1)
    }
  }

  useEffect(() => {
    if (cart) {
      setQty(cart?.quantity)
    }
  }, [cart])

  async function updateCart(qtyy) {
    let body = {
      cart_id: cart.id,
      quantity: qtyy
    }
    let res = await handlePostAPI('/cart/update', body, 'Cart Updated Succesfully')
    if (res) {
      getCart()
    }
  }

  return (
    <tr>
      <td>
        <li>
          <figure>
            <Link href={`/product-detail/${item?.id}`} className='product-image'>
              <img
                src={
                  item?.ProductImageEntities?.length
                    ? `${mediaUrl}${item?.ProductImageEntities[0]?.key}`
                    : `/images/east-1.jpg`
                }
                className='img-fluid'
                alt=''
              />
            </Link>
          </figure>
          <span>
            <h4>{item?.name || ''}</h4>
            <p>
              Product Code: <span className='product-code'>{item?.sku_id}</span>
            </p>
          </span>
        </li>
      </td>
      <td className='price'>€{item?.price}</td>
      <td className='quantity'>
        <form>
          <div className='input-group align-items-center justify-content-center qty_input'>
            <button onClick={handleDecrease} className='btn minus ' type='button'></button>

            <input
              type='text'
              disabled
              className='form-control add_input text_cart'
              placeholder=''
              value={qty}
              aria-label='Example text with two button addons'
            />
            <button onClick={handleIncrease} className='btn pluse' type='button'></button>
          </div>
        </form>
      </td>
      <td className='subtotal-price'>${Number(item?.price) * qty}</td>
      <td className='remove-item'>
        <a role='button' onClick={() => openDelete(cart?.id, 'cart')}>
          <img src='/images/ic_delete.svg' alt='delete' className='img-fluid' />
        </a>
      </td>
    </tr>
  )
}

export default CartProductCard
