// ** React Imports
import { useState } from 'react'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import FormProvider from 'src/@core/components/RHF/formProvider'
import RHFTextField from 'src/@core/components/RHF/RHFTextField'

// ** Hooks
import { useAuth } from 'src/hooks/useAuth'
import { doNothing, handlePostAPI } from 'src/api-requests'
import auth from 'src/configs/auth'
import { useRouter } from 'next/router'

export const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const schema = yup.object().shape({
  email: yup.string().email().required('Email is required'),
  password: yup.string().required('Password is required').min(6, 'Atleast 6 letters is required')
})

// password: yup.string().min(5).required()

const defaultValues = {
  email: '',
  password: ''
}

// .required('Mobile Number is required').matches(phoneRegExp, 'Please enter a Valid Mobile Number')
const schemaRegister = yup.object().shape({
  mobile: yup.string(),
  name: yup.string().required('Name is required'),
  email: yup.string().email().required('Email is required'),
  password: yup.string().required('Password is required').min(6, 'Atleast 6 letters is required')
})

// password: yup.string().min(5).required()

const defaultValuesRegister = {
  name: '',
  email: '',
  mobile: '',
  password: ''
}

const LoginForm = ({ type, handleClose }) => {
  const [showOtp, setShowOtp] = useState(false)

  // ** Hooks
  const { setUser } = useAuth()
  const router = useRouter()

  const methods = useForm({
    mode: 'onChange',
    resolver: yupResolver(schema),
    defaultValues
  })

  const methodsRegister = useForm({
    mode: 'onChange',
    resolver: yupResolver(schemaRegister),
    defaultValuesRegister
  })

  const {
    control,
    setError,
    setValue,
    handleSubmit,
    formState: { errors }
  } = methods

  const {
    control: registerControl,
    setError: setRegisterError,
    setValue: setRegisterValue,
    handleSubmit: handleSubmitRegister,
    formState: { errors: registerError }
  } = methodsRegister

  const onSubmit = async data => {
    let response = await handlePostAPI('/auth', data)
    if (response) {
      window.localStorage.setItem(auth.storageTokenKeyName, response.data.token)
      const returnUrl = router.query.returnUrl
      setUser({ ...response.data })
      window.localStorage.setItem('userData', JSON.stringify(response.data))
      const redirectURL = returnUrl && returnUrl !== '/' ? returnUrl : `/profile/${response?.data?.id}`
      if (type === 'login') {
        router.replace(redirectURL)
      } else {
        handleClose()
      }
    }

    return
  }

  const onRegister = async data => {
    if (!data?.mobile) {
      delete data['mobile']
    }

    let response = await handlePostAPI('/register', data)
    if (response) {
      window.localStorage.setItem(auth.storageTokenKeyName, response.data.token)
      const returnUrl = router.query.returnUrl
      setUser({ ...response.data })
      window.localStorage.setItem('userData', JSON.stringify(response.data))
      const redirectURL = returnUrl && returnUrl !== '/' ? returnUrl : `/profile/${response?.data?.id}`
      if (type === 'login') {
        router.replace(redirectURL)
      } else {
        handleClose()
      }
    }

    return
  }
  // eslint-disable-next-line
  return (
    <section className='login main'>
      <div className='container'>
        <div className='row login_flex'>
          <div className='col-3 d-none d-lg-block'>
            <figure>
              <img src='/images/login.svg' alt='login' className='img-fluid' />
            </figure>
          </div>
          <div className='col-12 col-lg-5'>
            <div className='login_form'>
              <ul
                className='nav nav-pills'
                id='border-radius: 8px;
      background: var(--primary-white, #FFF);         
      /* Desktop Card Elevation */
      box-shadow: 0px 2px 16px 0px rgba(0, 0, 0, 0.08);'
                role='tablist'
              >
                <li className='nav-item' role='presentation'>
                  <button
                    className='nav-link active'
                    id='pills-login-tab'
                    data-bs-toggle='pill'
                    data-bs-target='#pills-login'
                    type='button'
                    role='tab'
                    aria-controls='pills-login'
                    aria-selected='true'
                  >
                    Login
                  </button>
                </li>
                <li className='nav-item' role='presentation'>
                  <button
                    className='nav-link'
                    id='pills-register-tab'
                    data-bs-toggle='pill'
                    data-bs-target='#pills-register'
                    type='button'
                    role='tab'
                    aria-controls='pills-register'
                    aria-selected='false'
                  >
                    Register
                  </button>
                </li>
              </ul>

              <div className='tab-content' id='pills-tabContent'>
                <div
                  className='tab-pane fade show active'
                  id='pills-login'
                  role='tabpanel'
                  aria-labelledby='pills-login-tab'
                >
                  <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
                    <h3>
                      Welcome Back !<br />
                      Please Sign in now
                    </h3>
                    <div className='mb-3'>
                      <RHFTextField label={'Email'} type='text' name='email' placeholder='Enter Email' />
                    </div>
                    <div className='mb-3'>
                      <RHFTextField label={'Password'} type='password' name='password' placeholder='Enter Password' />
                    </div>

                    <a role='button' onClick={handleSubmit(onSubmit)} type='submit' className='btn gradiant_button'>
                      Login
                    </a>
                  </FormProvider>
                </div>
                <div className='tab-pane fade' id='pills-register' role='tabpanel' aria-labelledby='pills-register-tab'>
                  <FormProvider methods={methodsRegister} onSubmit={handleSubmitRegister(onRegister)}>
                    <h3>New to our Shop? Register Now</h3>
                    <div className='mb-3'>
                      <RHFTextField label={'Full Name'} type='text' name='name' placeholder='Enter Full Name' />
                    </div>
                    <div className='mb-3'>
                      <RHFTextField label={'Email'} type='text' name='email' placeholder='Enter Email' />
                    </div>
                    <div className='mb-3'>
                      <RHFTextField label={'Mobile Number'} type='text' name='mobile' placeholder='Mobile Number' />
                    </div>
                    <div className='mb-3'>
                      <RHFTextField label={'Password'} type='password' name='password' placeholder='Enter Password' />
                    </div>

                    <a
                      role='button'
                      onClick={handleSubmitRegister(onRegister)}
                      type='submit'
                      className='btn gradiant_button'
                    >
                      Register
                    </a>

                    <a role='button' onClick={doNothing} className='link'>
                      Need Help?
                    </a>
                  </FormProvider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LoginForm
