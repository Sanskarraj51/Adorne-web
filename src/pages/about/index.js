import Link from 'next/link'
import React from 'react'
import BreadCrumb from 'src/@core/components/breadcrumb'

const About = () => {
  return (
    <>
      <BreadCrumb path='About Us' />
      <section className=' '>
        <div className='container'>
          <div className='row'>
            <div className='content_detail mb-3 mt-3'>
              <h4 className='content_title'>About Us</h4>
              <div className='main_content'>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel, in posuere enim feugiat montes, accumsan
                  quis. Massa nec elit vivamus dolor scelerisque et feugiat dictum. Ut volutpat montes, ac morbi
                  scelerisque aliquam.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel, in posuere enim feugiat montes, accumsan
                  quis. Massa nec elit vivamus dolor scelerisque et feugiat dictum. Ut volutpat montes, ac morbi
                  scelerisque aliquam.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel, in posuere enim feugiat montes, accumsan
                  quis. Massa nec elit vivamus dolor scelerisque et feugiat dictum. Ut volutpat montes, ac morbi
                  scelerisque aliquam.
                </p>
                <ul>
                  <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                  <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.<a href='#0'>any link will be here</a>
                  </li>
                </ul>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel, in posuere enim feugiat montes, accumsan
                  quis. Massa nec elit vivamus dolor scelerisque et feugiat dictum. Ut volutpat montes, ac morbi
                  scelerisque aliquam.
                </p>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel, in posuere enim feugiat montes, accumsan
                  quis. Massa nec elit vivamus dolor scelerisque et feugiat dictum. Ut volutpat montes, ac morbi
                  scelerisque aliquam.
                </p>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel, in posuere enim feugiat montes, accumsan
                  quis. Massa nec elit vivamus dolor scelerisque et feugiat dictum. Ut volutpat montes, ac morbi
                  scelerisque aliquam.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
