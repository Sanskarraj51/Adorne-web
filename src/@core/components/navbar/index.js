import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useRef, useState } from 'react'

import $ from 'jquery'
import { useAuth } from 'src/hooks/useAuth'
import { doNothing } from 'src/api-requests'
import { useDispatch, useSelector } from 'src/store'
import { fetchCategoryData, fetchProductData } from 'src/store/apps/product'
import useOnClickOutside from 'src/@core/hooks/useOnClickOutside'
import { Collapse } from '@mui/material'
import FormDialog from '../dialog/FormDialog'
import { setLoginForm } from 'src/store/apps/user'

const Navbar = () => {
  const [openDep, setOpenDep] = useState(false)
  const [query, setQuery] = useState('')
  const router = useRouter()
  const { user, logout } = useAuth()
  const store = useSelector(state => state.product)
  const { loginForm } = useSelector(state => state.user)
  const dispatch = useDispatch()
  const ref = useRef()
  const navRef = useRef()
  const depRef = useRef()
  const catRef = useRef()
  const closeBtn = useRef()

  useEffect(() => {
    $('.all-category-btn').on('click', function () {
      $('.default-menu').slideToggle()
      $('.dropdown-overlay').show()
    })
    $('.home_menu').on('click', function () {
      $('.home-menus').slideToggle()
      $('.dropdown-overlay').show()
    })
    $('.usd_currency-btn').on('click', function () {
      $('.usd-menus').slideToggle()
      $('.dropdown-overlay').show()
    })
    $('.dropdown-overlay').on('click', function () {
      $('.default-menu').hide()
      $(this).hide()
    })

    $('.close_tbs').click(function () {
      $('.serachbar_header').css('display', 'none')
    })
  }, [])

  useEffect(() => {
    dispatch(fetchProductData())
    dispatch(fetchCategoryData())
  }, [])


  return (
    <header>
      <nav className='navbar navbar-expand-lg'>
        <div className='container'>
          <div className='main-header	'>
            <div className='logo-header'>
              <Link className='navbar-brand' href='/'>
                <img src='/images/logo.png' alt='logo' className='img-fluid' />
              </Link>
              <button
                className='navbar-toggler'
                type='button'
ref={closeBtn}
                data-bs-toggle='collapse'
                data-bs-target='#navbarSupportedContent'
                aria-controls='navbarSupportedContent'
                aria-expanded='false'
                aria-label='Toggle navigation'
              >
                <img src='/images/ic_round-menu.svg' alt='menu' className='img-fluid' />
              </button>
            </div>
            <div className='side-header'>
              <div className='topheader'>
                <div className='topbar_colum'>
                  <div className='search-area'>
                    <div ref={catRef} className='all-category dropdown responsive_hidden'>
                      <button
                        ref={ref}
                        className='all-category-btn dropdown-toggle'
                        type='button'
                        id='dropdownMenu1'
                        data-toggle='dropdown'
                        aria-haspopup='true'
                        aria-expanded='true'
                      >
                        All Categories
                        <img src='/images/arrow_gray.svg' alt='menu' className='img-fluid' />
                      </button>
                      <ul
                        className='dropdown-menu default-menu'
                        aria-labelledby='dropdownMenu1'
                      >
                        {store?.categoryData?.length
                          ? store?.categoryData?.map((item, i) => (
                              <li key={i}>
                                <Link href={`/search/${item?.name}`}>{item?.name}</Link>
                              </li>
                            ))
                          : null}
                      </ul>
                    </div>
                    <div className='serachbar d-none d-sm-none d-md-none d-lg-block'>
                      <div className='search_icon desktop_hidden'>
                        <p className='search_icons'>
                          <span className='material-symbols-rounded'> search </span>
                        </p>
                      </div>
                      <div className='serachbar_header'>
                        <form
                          className='d-flex'
                          role='search'
                          onSubmit={e => {
                            e.preventDefault()
                            if (query) {
                              router.push(`/search/${query}`)
                              setQuery('')
                            }
                          }}
                        >
                          <input
                            value={query}
                            onChange={e => setQuery(e.target.value)}
                            className='form-control me-2'
                            type='search'
                            placeholder='Search'
                            aria-label='Search'
                          />
                          <button className='btn btn-outline-success' type='submit'>
                            Search
                          </button>
                        </form>
                        <div
                          className='close_tbs'
                          data-bs-toggle='collapse'
                          data-bs-target='#navbarSupportedContent'
                          aria-controls='navbarSupportedContent'
                          aria-expanded='false'
                          aria-label='Toggle navigation'
                        >
                          <img src='/images/close.svg' alt='menu' className='img-fluid' />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='login-area'>
                    <div className='login_details'>
                      <ul className='login-register'>
                        <li>
                          <Link href='/cart'>
                            <img src='/images/cart.svg' alt='menu' className='img-fluid' />
                          </Link>
                          <div className='cart-counts'>{store?.cartData?.products?.length || 0}</div>
                        </li>
                        <li className='logged_in desktop_shown'>
                          <Link href={`/profile/${user?.id}`}>
                            <img src='/images/profile.svg' alt='menu' className='img-fluid' />
                          </Link>

                          <div className='login_links'>
                            <div className='login-text'>
                              {user ? (
                                <Link href={`/profile/${user?.id}`}>Profile</Link>
                              ) : (
                                <Link href='/login'>Login</Link>
                              )}
                            </div>
                            <div className='resigster-text'>
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
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className='bottomheader'
              
              
              >
                <div className='collapse navbar-collapse' id='navbarSupportedContent'
                
                ref={navRef}
                >
                  <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                    <li className='logged_in responsive_shown desktop_hidden'>
                      <img src='/images/profile.svg' alt='menu' className='img-fluid icon profile_icon' />
                      <div className='login_links'>
                        <div className='login-text'>
                          {user ? <Link href={`/profile/${user?.id}`}>Profile</Link> : <Link href='/login'>Login</Link>}
                        </div>
                      </div>
                      <a
                        role='button'
                        className='nav-close'
                        data-bs-toggle='collapse'
                        data-bs-target='#navbarSupportedContent'
                        aria-controls='navbarSupportedContent'
                        aria-expanded='false'
                        aria-label='Toggle navigation'
                      >
                        <img src='/images/close.svg' alt='menu' className='img-fluid icon' />
                      </a>
                    </li>

                    <li className='d-block d-sm-block d-md-block d-lg-none'>
                      <div className='searchbar_sidebar'>
                        <form
                          className='d-flex'
                          role='search'
                          onSubmit={e => {
                            e.preventDefault()
                            if (query) {
                              router.push(`/search/${query}`)
                              setQuery('')
                            }
                          }}
                        >
                          <input
                            value={query}
                            onChange={e => setQuery(e.target.value)}
                            className='form-control me-2'
                            type='search'
                            placeholder='Search'
                            aria-label='Search'
                          />
                          <button className='sucess_btn' type='submit'>
                            <img src='/images/search.svg' alt='menu' className='img-fluid icon' />
                          </button>
                        </form>
                      </div>
                    </li>

                    <li className='shop-category responsive_shown'>
                      <label className='dropdown'>
                        <div className='dd-button'>
                          <img src='/images/ic_round-menu.svg' alt='menu' className='img-fluid menu_icon' />
                          <p>All Categories</p>
                        </div>
                        <input type='checkbox' className='dd-input' id='test1' />
                        <ul
                          className='dd-menu'

                          //  style={{ display: openCategories ? 'block' : 'none' }}
                        >
                          {store?.categoryData?.length
                            ? store?.categoryData?.map((item, i) => (
                                <li key={i}>
                                  <Link href={`/search/${item?.name}`}>{item?.name}</Link>
                                </li>
                              ))
                            : null}
                        </ul>
                      </label>
                    </li>

                    <li ref={depRef} className='shop-category'>
                      <label onClick={() => setOpenDep(!openDep)} className='dropdown'>
                        <div ref={ref} className='dd-button'>
                          <img src='/images/ic_round-menu.svg' alt='' className='img-fluid d-none d-lg-block' />
                          <p>Shop By Department</p>
                        </div>
                        <input type='checkbox' className='dd-input' id='test' />
                        <ul className='dd-menu'>
                          {store?.categoryData?.length
                            ? store?.categoryData?.map((item, i) => (
                                <li key={i}>
                                  <Link href={`/search/${item?.name}`}>{item?.name}</Link>
                                </li>
                              ))
                            : null}
                        </ul>
                      </label>
                    </li>
                    <li className='nav-item active'>
                      <Link className='nav-link' href='/'>
                        Home
                      </Link>
                    </li>
                    <li className='nav-item'>
                      <Link className='nav-link' href='/about'>
                        About Us
                      </Link>
                    </li>
                    <li className='nav-item'>
                      <Link className='nav-link' href='/contact-us'>
                        Contact Us
                      </Link>
                    </li>
                    {/* <!-- <li className="nav-item"></li>>
                    <a className="nav-link" href="#">Faqs</a> */}
                    {/* <li className='nav-item'>
                      <Link className='nav-link' href='/blogs'>
                        Blog
                      </Link>
                    </li> */}
                  </ul>

                  <div className='track-order'>
                    <ul className='track-currency'>
                      {/* <li>
                        <Link href='/track'>Track</Link>
                      </li> */}
                      <li>
                        <div className='usd_currency dropdown'>
                          {/* <button
                            className='usd_currency-btn dropdown-toggle'
                            type='button'
                            id='dropdownMenu3'
                            data-toggle='dropdown'
                            aria-haspopup='true'
                            aria-expanded='true'
                          >
                            EURO */}
                            {/* <img src='/images/down_arrow.svg' alt='menu' className='img-fluid' /> */}
                          {/* </button> */}
                          {/* <ul className='dropdown-menu usd-menus' aria-labelledby='dropdownMenu1'>
                            <li>
                              <a onClick={e => e.preventDefault()} href='#'>
                                INDIA
                              </a>
                            </li>
                          </ul> */}
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <FormDialog maxWidth='xl' title='Login' open={loginForm} setOpen={val => dispatch(setLoginForm(val))} />
    </header>
  )
}

export default Navbar
