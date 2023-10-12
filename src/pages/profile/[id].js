import { Fragment, useEffect, useState } from 'react'
import React from 'react'
import RHFTextField from 'src/@core/components/RHF/RHFTextField'
import FormProvider from 'src/@core/components/RHF/formProvider'
import BreadCrumb from 'src/@core/components/breadcrumb'
import { handlePostAPI } from 'src/api-requests'
import { useAuth } from 'src/hooks/useAuth'
import ChangePassword from 'src/views/pages/profile/ChangePassword'
import Orders from 'src/views/pages/profile/Orders'
import Addresses from 'src/views/pages/profile/addresses'

// ** Third Party Imports
import * as yup from 'yup'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { phoneRegExp } from 'src/views/pages/login'

const schemaRegister = yup.object().shape({
  mobile: yup.string().required('Mobile Number is required').matches(phoneRegExp, 'Please enter a Valid Mobile Number'),
  name: yup.string().required('Name is required'),
  email: yup.string().email().required('Email is required')
})

const defaultValuesRegister = {
  name: '',
  email: '',
  mobile: ''
}

const Profile = () => {
  const { user, setUser } = useAuth()

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
    reset,
    formState: { errors: registerError }
  } = methodsRegister

  useEffect(() => {
    if (user) {
      reset({
        name: user?.name || '',
        email: user?.email || '',
        mobile: user?.mobile || ''
      })
    }
  }, [user])

  const updateProfile = async data => {
    let body = {
      name: data?.name,
      mobile: data?.mobile,
      user_id: user?.id
    }
    let response = await handlePostAPI('/update-profile', body)
    if (response) {
      setUser({ ...response.data })
      window.localStorage.setItem('userData', JSON.stringify(response.data))
    }

    return
  }

  return (
    <>
      <BreadCrumb path={'Profile'} />
      <div className='container mt-4 mb-5'>
        <div className='row'>
          <div className='col-12 mb-3'>
            <div className='myaccount_options mb-4 mb-md-0'>
              <div className='d-flex align-items-start tabs'>
                <div
                  className='nav flex-column nav-pills me-3 mb-3 col-12 col-md-4 col-lg-3'
                  id='v-pills-tab'
                  role='tablist'
                  aria-orientation='vertical'
                >
                  <div className='myaccount_links mb-4'>
                    <h2 className='display_username text-left'>{user?.name || ''}</h2>
                    <p className='display_useremail text-left'>{user?.email || user?.mobile || ''}</p>
                  </div>
                  <div className='myaccount_tabs'>
                    <button
                      className='nav-link active'
                      id='v-pills-home-tab'
                      data-bs-toggle='pill'
                      data-bs-target='#v-pills-home'
                      type='button'
                      role='tab'
                      aria-controls='v-pills-home'
                      aria-selected='true'
                    >
                      Profile
                    </button>
                    <button
                      className='nav-link'
                      id='v-pills-profile-tab'
                      data-bs-toggle='pill'
                      data-bs-target='#v-pills-profile'
                      type='button'
                      role='tab'
                      aria-controls='v-pills-profile'
                      aria-selected='false'
                    >
                      Orders
                    </button>
                    <button
                      className='nav-link'
                      id='v-pills-messages-tab'
                      data-bs-toggle='pill'
                      data-bs-target='#v-pills-messages'
                      type='button'
                      role='tab'
                      aria-controls='v-pills-messages'
                      aria-selected='false'
                    >
                      Manage Address
                    </button>
                    <button
                      className='nav-link'
                      id='v-pills-settings-tab'
                      data-bs-toggle='pill'
                      data-bs-target='#v-pills-settings'
                      type='button'
                      role='tab'
                      aria-controls='v-pills-settings'
                      aria-selected='false'
                    >
                      Update Password
                    </button>
                  </div>
                </div>
                <div className='tab-content col-12 col-md-8 col-lg-9' id='v-pills-tabContent'>
                  <div
                    className='tab-pane fade show active'
                    id='v-pills-home'
                    role='tabpanel'
                    aria-labelledby='v-pills-home-tab'
                  >
                    <FormProvider methods={methodsRegister} onSubmit={handleSubmit(updateProfile)}>
                      <div className='profile'>
                        <div className='tab_title'>
                          <h5>My Profile</h5>
                          <a role='button' onClick={handleSubmit(updateProfile)} className='btn gradiant_button'>
                            Update Profile
                          </a>
                        </div>
                        <div className='tab_content'>
                          <div className='row'>
                            <div className='col-12 col-md-6'>
                              <div className='firstname mb-2'>
                                <RHFTextField
                                  label={'Full Name'}
                                  type='text'
                                  name='name'
                                  placeholder='Enter Full Name'
                                />
                              </div>
                              <div className='firstname mb-2 '>
                                <RHFTextField
                                  disabled
                                  label={'Email'}
                                  type='text'
                                  name='email'
                                  placeholder='Enter Email'
                                />
                              </div>
                            </div>
                            <div className='col-12 col-md-6'>
                              <div className='firstname mb-2 '>
                                <RHFTextField
                                  label={'Mobile Number'}
                                  type='text'
                                  name='mobile'
                                  placeholder='Mobile Number'
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </FormProvider>
                  </div>
                  {/* <!-- orders --> */}
                  <Orders />
                  {/* <!-- address --> */}
                  <Addresses />
                  {/* <!-- manage passwoed --> */}
                  <ChangePassword />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

Profile.authGuard = true

export default Profile
