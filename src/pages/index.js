import { useEffect, useState } from 'react'
import FallbackSpinner from 'src/@core/components/spinner'
import { useDispatch, useSelector } from 'src/store'
import { fetchHome } from 'src/store/apps/user'
import Banner from 'src/views/pages/home/Banner'
import Blogs from 'src/views/pages/home/Blogs'
import FetauredProduct from 'src/views/pages/home/FetauredProduct'
import NewArrival from 'src/views/pages/home/NewArrival'
import PopularItems from 'src/views/pages/home/PopularItems'
import Support from 'src/views/pages/home/Support'

const Home = () => {
  const [loading, setLoading] = useState(false)

  const store = useSelector(state => state.user)
  const dispatch = useDispatch()

  async function getHomePageData() {
    setLoading(true)
    await dispatch(fetchHome())
    setLoading(false)
  }

  useEffect(() => {
    getHomePageData()
  }, [dispatch])

  if (loading) {
    return <FallbackSpinner />
  }

  console.log('store?.home', store?.home)

  return (
    <>
      <Banner data={store?.home?.banners} mediaUrl={store?.home?.mediaUrl} />
      <PopularItems data={store?.home?.popularItem} mediaUrl={store?.home?.mediaUrl} />
      <NewArrival data={store?.home?.newArrivals} mediaUrl={store?.home?.mediaUrl} />
      <FetauredProduct data={store?.home} mediaUrl={store?.home?.mediaUrl} />
    </>
  )
}

export default Home
