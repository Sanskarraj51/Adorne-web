// ** Next Import
import Link from 'next/link'
import { useAuth } from 'src/hooks/useAuth'
import Icon from 'src/@core/components/icon'

const FooterContent = () => {
  const { user, logout } = useAuth()

  return (
    <footer style={{marginTop:"-2px"}}>
      <div  className='footer-section'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-4 col-md-4 col-sm-12'>
              <div className='logo-details'>
                <img src='/images/logo.png' className='img-fluid' alt='footer-logo' />
                <p>
                  Adorne is a leading manufacturer and distributor of electronic items. We are known for our premium
                  quality and building products thats lasts.
                </p>
              </div>
            </div>

            <div className='col-lg-3 col-md-3 col-sm-12'>
              <div className='logo-details'>
                <h5 className='footer-headings'>Contact Us</h5>
                <ul className='contact-information'>
                  <li>
                    <span>
                      <span className='material-symbols-rounded'>
                        <Icon icon='mdi:place' />
                      </span>
                    </span>
                    <figure>2972 Westheimer Rd. Santa Ana, Illinois </figure>
                  </li>

                  <li>
                    <span>
                      <span className='material-symbols-rounded'>
                        {' '}
                        <Icon icon='mdi:phone' />
                      </span>
                    </span>
                    <figure>(800) 468-4332</figure>
                  </li>

                  <li>
                    <span>
                      <span className='material-symbols-rounded'>
                        {' '}
                        <Icon icon='mdi:email' />
                      </span>
                    </span>
                    <figure>hello@techtrox.com</figure>
                  </li>
                </ul>
              </div>
            </div>

            <div className='col-lg-2 col-md-2 col-sm-12'>
              <div className='footer_menus'>
                <h5 className='footer-headings'>My Account</h5>
                <ul>
                  <li>
                    {user ? <Link href={`/profile/${user?.id}`}>Profile</Link> : <Link href='/login'>Login</Link>}
                  </li>
                  <li>
                    {user ? (
                      <Link
                        href='/login'
                        onClick={e => {
                          e.preventDefault()
                          logout()
                        }}
                      >
                        Logout
                      </Link>
                    ) : (
                      <Link href='/login'>Register</Link>
                    )}
                  </li>
                </ul>
              </div>
            </div>

            <div className='col-lg-3 col-md-3 col-sm-12'>
              <div className='footer_menus'>
                <h5 className='footer-headings'>My Information</h5>
                <ul>
                  <li>
                    <Link href='/contact-us' className='footer-links'>
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link href='/shipping' onClick={e => e.preventDefault()} className='footer-links'>
                      Shipping Information
                    </Link>
                  </li>
                  <li>
                    <Link href='/privacy' className='footer-links'>
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href='/terms' className='footer-links'>
                      Terms of Use
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='footer-bottom'>
          <div className='container'>
            <div className='row align-items-center'>
              <div className='col-lg-6 col-md-6 col-sm-12'>
                <div className='copyright'>
                  <p>© 2023 Adrone Branded Solutions, Inc</p>
                </div>
              </div>
              <div className='col-lg-6 col-md-6 col-sm-12'>
                <div className='credit_cards'>
                  <ul>
                    <li>
                      <img src='/images/footer-paypal.png' className='img-fluid' alt='' />
                    </li>
                    <li>
                      <img src='/images/footer-axis.png' className='img-fluid' alt='' />
                    </li>
                    <li>
                      <img src='/images/footer-visa.png' className='img-fluid' alt='' />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default FooterContent
