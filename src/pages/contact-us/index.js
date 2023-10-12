import React from 'react'
import BreadCrumb from 'src/@core/components/breadcrumb'

const ContactUs = () => {
  return (
    <>
      <BreadCrumb path='Contact Us' />
      <section class=" ">
    <div class="container">
      <div class="row">
        <div class="contact_box mb-3 mt-3">
          <h4 class="content_title">Contact Us</h4>
      <div class="contact_detail">
        <ul>
          <li>
            <figure>
              <img src="/images/contact_location.svg" alt='' />
            </figure>
          <div >
            <div class="contact_title">
              Address
            </div>
            <div class="contact_info">
              2972 Westheimer Rd. Santa Ana, Illinois 
            </div>
          </div>
          </li>
          <li>
            <figure>
              <img src="/images/contact_call.svg" alt='' />
            </figure>
         <div>
          <div class="contact_title">
            Call
          </div>
          <div class="contact_info">
            0123456789
          </div>
         </div>
          </li>
          <li>
            <figure>
              <img src="/images/contact_mail.svg" alt='' />
            </figure>
       <div >
        <div class="contact_title">
          Email
        </div>
        <div class="contact_info">
          example@demo.com 
        </div>
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
