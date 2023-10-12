import React, { useEffect, useState } from 'react'
import OrderCard from './OrderCard'
import { useDispatch, useSelector } from 'src/store'
import { useRouter } from 'next/router'
import { fetchOrders } from 'src/store/apps/user'
import CustomModal from '../common/CustomModa'
import InvoicePrint from './Invoice'

const Orders = () => {
  const [loading, setLoading] = useState('')
  const [show, setShow] = useState(false)
  const [invData, setInvData] = useState({})
  const dispatch = useDispatch()
  const { orders ,mediaUrl } = useSelector(state => state.user)

  const router = useRouter()
  const { id } = router.query

  async function getOrdersData() {
    setLoading(true)
    await dispatch(fetchOrders(id))
    setLoading(false)
  }

  function openInv(data) {
    setInvData(data)
    setShow(true)
  }

  function closeInv() {
    setInvData({})
    setShow(false)
  }

  useEffect(() => {
    if (id) {
      getOrdersData()
    }
  }, [dispatch, id])

  return (
    <div className='tab-pane fade' id='v-pills-profile' role='tabpanel' aria-labelledby='v-pills-profile-tab'>
      <div className='orders'>
        <div className='tab_title'>
          <h5>My Orders</h5>
        </div>
        <ul>
          {orders?.length > 0 ? orders?.map((item, i) => <OrderCard openInv={openInv} key={i} item={item} />) : <p>No Orders found</p>}
        </ul>
      </div>

      <CustomModal size='lg' scroll='paper' open={show} closeDialog={closeInv} title={'Invoice'}>
        <InvoicePrint data={invData} mediaUrl={mediaUrl} />
      </CustomModal>
    </div>
  )
}

export default Orders
