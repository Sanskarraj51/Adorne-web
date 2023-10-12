import Link from 'next/link'
import React from 'react'


const BreadCrumb = ({ path }) => {
  return (
    <div className='category-banner'>
      <div className='breadcrumbs'>
        <ul>
          <li>
            <Link href='/' className='first-child'>
              Home
            </Link>
          </li>
          <li>
            <Link href='#' onClick={e => e.preventDefault()} className='span-child'>
              /
            </Link>
          </li>
          {path ? (
            <li>
              <span className='last-child' >{path}</span>
            </li>
          ) : null}
        </ul>
      </div>
    </div>
  )
}

BreadCrumb.defaultProps = {
  path: 'Home'
}

export default BreadCrumb
