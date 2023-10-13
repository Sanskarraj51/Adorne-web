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
              <h4 className='content_title text-center'>Welcome to Adorne</h4>
              <div className='main_content'>
                <p>
                  <strong>Adorne</strong>, where exquisite craftsmanship meets timeless elegance. Our passion for
                  jewellery and fashion transcends trends, allowing us to curate a collection that resonates with your
                  unique style.
                </p>
                <p>
                  We believe that jewellery and attire are reflection of your individuality and a statement of your
                  personal flair. Our collection is a harmonious blend of traditional craftsmanship and contemporary
                  designs of Indian ethnic, Korean and western fashion. From delicate, handcrafted necklaces to bold and
                  expressive statement pieces, we offer a diverse range of jewellery to suit every occasion. Our
                  fashionable attires are the top quality picked and handloom statements. Whether you're dressing up for
                  a special event or adding a touch of elegance to your everyday style, you'll find the perfect piece in
                  our selection. Quality and authenticity are at the heart of what we do and hence we collaborated with
                  high quality manufacturer, where each piece undergoes rigorous quality checks to ensure that it meets
                  our high standards and exceeds your expectations. We're committed to providing a seamless shopping
                  experience. Our user-friendly website allows you to explore our collections with ease
                </p>
                <p>
                  Thank you for choosing Adorne as your trusted source for exquisite jewellery and fashion. We invite
                  you to explore our collection and discover the perfect pieces that resonate with your style and
                  personality. Welcome to a world of timeless beauty and
                </p>
                <p>
                  Craftsmanship —<b>Welcome to Adorne</b>
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
