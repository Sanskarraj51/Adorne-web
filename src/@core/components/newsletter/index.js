import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { handlePostAPI } from 'src/api-requests'

const NewsLetter = () => {
  const [email, setEmail] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if (!email || !email.match(mailformat)) {
      toast.error('Please Enter a Valid Email')

      return
    }

    let body = { email: email }
    let res = await handlePostAPI('/subscribe/add-subscribe', body, 'Newsletter Subscribed Successfully')
    if (res) {
      setEmail('')
    }
  }

  return (
    <div class='subscribe-newsletter'>
      <div class='container'>
        <div class='subscription'>
          <div class='subscribe-text'>
            <h4>Subscribe to Our Newsletter</h4>
            <p>Be the first to know about new arrivals + special offers</p>
          </div>
          <div class='subscribe-field'>
            <form onSubmit={handleSubmit}>
              <input
                value={email}
                onChange={e => setEmail(e.target.value)}
                type='email'
                id='email'
                name='email'
                placeholder='test@example.com'
                class='subscription-email'
              />
              <input type='submit' class='btn-subscribe' value='' />
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewsLetter
