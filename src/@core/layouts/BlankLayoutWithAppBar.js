import Navbar from '../components/navbar'
import FooterContent from './components/FooterContent'
import NewsLetter from '../components/newsletter'
import Support from 'src/views/pages/home/Support'

const BlankLayoutWithAppBar = props => {
  // ** Props
  const { children } = props

 

  return (
    <div
      className='main navbar-sanskar'
    >
      <Navbar />
      {children}
      <NewsLetter />
      {/* <Support /> */}

      <FooterContent />
    </div>
  )
}

export default BlankLayoutWithAppBar
