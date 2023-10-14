import React from 'react'
import BreadCrumb from 'src/@core/components/breadcrumb'

const ContactUs = () => {
  return (
    <>
      <BreadCrumb path='Contact Us' />
      <section className=' '>
        <div className='container'>
          <div className='row'>
            <div className='contact_box mb-3 mt-3'>
              <h4 className='content_title'>Contact Us</h4>
              <div className='contact_detail'>
                <ul>
                  <li>
                    <figure>
                      <img src='/images/contact_location.svg' alt='' />
                    </figure>
                    <div>
                      <div className='contact_title'>Address</div>
                      <div className='contact_info'>Amsterdam( The Netherlands )</div>
                    </div>
                  </li>
                  <li>
                    <figure>
                      <img src='/images/contact_call.svg' alt='' />
                    </figure>
                    <div>
                      <div className='contact_title'>Call</div>
                      <div className='contact_info'>+31 68 730 8126</div>
                      <div className='contact_info'>+31 68 785 7915</div>
                    </div>
                  </li>
                  <li>
                    <figure>
                      <img src='/images/contact_mail.svg' alt='' />
                    </figure>
                    <div>
                      <div className='contact_title'>Email</div>
                      <div className='contact_info'>contactadorne@gmail.com</div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ContactUs
