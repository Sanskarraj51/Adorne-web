import React, { useEffect, useRef, useState } from 'react'
import ConfirmModal from '../common/confirmModal'
import FormProvider from 'src/@core/components/RHF/formProvider'


// ** Third Party Imports
import * as yup from 'yup'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import RHFTextField from 'src/@core/components/RHF/RHFTextField'
import { handleGetAPI, handlePostAPI } from 'src/api-requests'
import AddressCard from './AddressCard'
import { useDispatch, useSelector } from 'src/store'
import { fetchAddress } from 'src/store/apps/user'
import FallbackSpinner from 'src/@core/components/spinner'
import { useRouter } from 'next/router'
import auth from 'src/configs/auth'
import { Chip, CircularProgress, IconButton } from '@mui/material'
import $ from 'jquery'
import IconifyIcon from 'src/@core/components/icon'
import toast from 'react-hot-toast'
import { Icon } from '@iconify/react'
import { phoneRegExp } from '../login'

const defaultValues = {
  isDefault: 1,
  user_id: '',
  address1: '',
  address2: '',
  city: '',
  state: '',
  country: '',
  pin: '',
  phone: '',
  email: '',
  full_name: '',
  address_type: 'home'
}

const schema = yup.object().shape({
  phone: yup.string().required('Phone Number is required').matches(phoneRegExp, 'Please enter a Valid Phone Number'),
  full_name: yup.string().required('Name is required'),
  address1: yup.string().required('Address 1 is required'),
  address2: yup.string().required('Address 2 is required'),
  city: yup.string().required('city is required'),
  state: yup.string().required('state is required'),
  country: yup.string().required('country is required'),
  pin: yup.string().required('pin is required'),
  email: yup.string().email().required('email is required')
})

const Addresses = ({ place = 'profile', selected, setSelected, closeModal, popup }) => {
  const [loading, setLoading] = useState('')
  const [btnLoading, setBtnLoading] = useState('')
  const [dialogStatus, setDialogStatus] = useState('Add')
  const [deletId, setDeleteId] = useState('')
  const [deletShow, setDeleteShow] = useState(false)

  const closeRef = useRef(null)
  const dispatch = useDispatch()
  const store = useSelector(state => state.user)

  const router = useRouter()
  const { id } = router.query

  async function getAddressData() {
    setLoading(true)
    await dispatch(fetchAddress(id))
    setLoading(false)
  }

  const methods = useForm({
    mode: 'onChange',
    resolver: yupResolver(schema),
    defaultValues
  })

  const {
    control,
    setError,
    setValue,
    watch,
    handleSubmit,
    reset,
    formState: { errors }
  } = methods

  const onSubmit = async data => {
    setBtnLoading(true)
    let url = auth.addAddress
    if (dialogStatus === 'Edit') {
      url = auth.updateAddress
    }

    let res = await handlePostAPI(url, data, `Address ${dialogStatus === 'Edit' ? 'Updated' : 'Added'} Successfully`)

    if (res) {
      closeRef.current.click()
      dispatch(fetchAddress(id))
    }
    setBtnLoading(false)
  }

  async function useAddress() {
    if (!selected) {
      toast.error('Please Select a Address to continue')
      // eslint-disable-next-line
      return
    }

    let data = store?.address?.find(item => item.id === selected)

    setBtnLoading(true)
    let url = auth.updateAddress

    let res = await handlePostAPI(
      url,
      {
        user_id: data?.user_id || '',
        address_id: data?.id || '',
        isDefault: 1 || ''
      },
      `Address Updated Successfully`
    )

    if (res) {
      dispatch(fetchAddress(id))
      closeModal ? closeModal() : null
    }
    setBtnLoading(false)
  }

  useEffect(() => {
    if (id) {
      getAddressData()
    }
  }, [dispatch, id])

  function openAdd() {
    reset(defaultValues)
    setValue('user_id', id)
    setDialogStatus('Add')
  }

  function openDelete(data) {
    setDeleteId(data.id)
    setDeleteShow(true)
  }

  function handleClose() {
    setDeleteId('')
    setDeleteShow(false)
  }

  function openEdit(data) {
    reset({
      user_id: data?.user_id || '',
      address_id: data?.id || '',
      isDefault: 1,
      email: data?.email || '',
      address1: data?.address1 || '',
      address2: data?.address2 || '',
      city: data?.city || '',
      state: data?.state || '',
      country: data?.country || '',
      pin: data?.pin || '',
      phone: data?.phone || '',
      full_name: data?.full_name || '',
      address_type: data?.address_type || 'home'
    })
    setDialogStatus('Edit')
  }

  async function deleteAddress() {
    setBtnLoading(true)
    let url = `${auth.remvoveAddress}${deletId}`
    const response = await handleGetAPI(url)
    if (response) {
      dispatch(fetchAddress(id))
      setDeleteShow(false)
    }
    setBtnLoading(false)
  }

  useEffect(() => {
    if (store?.address?.length > 0 && place === 'billing') {
      let addr = {}
      for (let i of store?.address) {
        if (i?.isDefault === 1) {
          addr = i
        }
      }
      setSelected(addr?.id)
    }
  }, [store?.address])

  if (loading) {
    return <FallbackSpinner />
  }

  return (
    <>
      {place === 'billing' ? (
        <div className={popup ? 'col-sm-12' : 'col-lg-8 col-md-8 col-sm-12'}>
          <div className='saved-address'>
            <h4>Saved Addresses</h4>
            <a role='button' onClick={useAddress} className='btn gradiant_button using-address'>
              {btnLoading ? <CircularProgress size={30} color='inherit' /> : 'Use This Address'}{' '}
            </a>
          </div>

          {/* not-selected-checkout */}
          {store?.address?.length > 0 ? (
            store?.address?.map((item, i) => (
              <div
                onClick={() => setSelected(item.id)}
                key={i}
                className={selected === item?.id ? 'save-address-checkout' : 'not-selected-checkout'}
              >
                <div className='saved-address-manual'>
                  <div className='label-tags d-flex '>
                    <div className='form-check p-0'>
                      <input
                        className='form-check-input'
                        checked={selected === item?.id}
                        disabled
                        type='radio'
                        name='flexRadioDefault'
                        id='flexRadioDefault1'
                      />
                      <label
                        onClick={() => setSelected(item.id)}
                        className='form-check-label'
                        style={{ textTransform: 'capitalize' }}
                        for='flexRadioDefault1'
                      >
                        {item?.address_type}
                      </label>
                    </div>
                    {item?.isDefault === 1 ? (
                      <Chip size='small' sx={{ ml: 2 }} color='primary' label='Default' />
                    ) : null}
                  </div>
                  <div className='action-details'>
                    <a
                      role='button'
                      onClick={() => openEdit(item)}
                      className='btn-edited'
                      data-bs-toggle='modal'
                      data-bs-target='#exampleModal'
                    >
                      Edit
                    </a>
                    <a
                      role='button'
                      onClick={() => openDelete(item)}
                      className='btn-danger'
                      data-bs-toggle='modal'
                      data-bs-target='#staticBackdrop1'
                    >
                      Delete
                    </a>
                  </div>
                </div>
                <div className='saved-manual-address-list'>
                  <p>
                    {item?.address1} {item?.city}, {item?.state} {item?.state}, {item?.country} M. {item?.phone}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p>No Address found</p>
          )}
          {/* <div className='save-address-checkout'>
            <div className='saved-address-manual'>
              <div className='label-tags'>
                <div className='form-check p-0'>
                  <input className='form-check-input' type='radio' name='flexRadioDefault' id='flexRadioDefault1' />
                  <label className='form-check-label' for='flexRadioDefault1'>
                    Home
                  </label>
                </div>
              </div>
              <div className='action-details'>
                <a href='' className='btn-edited' data-bs-toggle='modal' data-bs-target='#exampleModal'>
                  Edit
                </a>
                <a href='' className='btn-danger' data-bs-toggle='modal' data-bs-target='#staticBackdrop1'>
                  Delete
                </a>
              </div>
            </div>
            <div className='saved-manual-address-list'>
              <p>2972 Westheimer Rd. Santa Ana, Illinois 85486, United States M. 0123456789</p>
            </div>
          </div>

          <div className='not-selected-checkout'>
            <div className='saved-address-manual'>
              <div className='label-tags'>
                  <div className='form-check p-0'>
                    <input className='form-check-input' type='radio' name='flexRadioDefault' id='flexRadioDefault2' />
                    <label className='form-check-label' for='flexRadioDefault2'>
                      Work
                    </label>
                  </div>
              </div>
              <div className='action-details'>
                <a href='' className='btn-edited' data-bs-toggle='modal' data-bs-target='#exampleModal'>
                  Edit
                </a>
                <a href='' className='btn-danger' data-bs-toggle='modal' data-bs-target='#staticBackdrop1'>
                  Delete
                </a>
              </div>
            </div>
            <div className='saved-manual-address-list'>
              <p>2972 Westheimer Rd. Santa Ana, Illinois 85486, United States M. 0123456789</p>
            </div>
          </div> */}

          <div className='add-new-address'>
            <div className='new-tap-address'>
              <a role='button' onClick={openAdd} data-bs-toggle='modal' data-bs-target='#exampleModal'>
                <span className='material-symbols-rounded'>
                  <IconifyIcon icon='mdi:plus' />{' '}
                </span>
                <p>Add New Address</p>
              </a>
            </div>
          </div>

          {/* <div className='payemet-mode'>
            <div className='title-payment'>
              <h3>Payment Mode</h3>
            </div>
          </div> */}

<h6 style={{ color: '#86533C' }} className='w-100'>
                      Payment is Under Development. Kindly place Order using Whatsapp and Instragram
                    </h6>

                    <div className='d-flex '>
                      <a target='_blank' href='https://wa.me/+31633386607'>
                        <IconButton sx={{ bgcolor: '#0cc144', borderRadius: '4px', marginRight: '5px' }}>
                          <Icon color='white' icon='mdi:whatsapp' />
                        </IconButton>
                      </a>
                      <a
                        className='footer-hiring-btn2'
                        target='_blank'
                        href='https://www.instagram.com/contact_adorne/'
                      >
                        <IconButton
                          sx={{
                            bgcolor: 'white',
                            borderRadius: '4px',

                            boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'
                          }}
                        >
                          <img alt='' src='/images/instagram.png' />
                        </IconButton>
                      </a>
                    </div>
        </div>
      ) : (
        <div className='tab-pane fade' id='v-pills-messages' role='tabpanel' aria-labelledby='v-pills-messages-tab'>
          <div className='tab_title'>
            <h5>Your Addresses</h5>
            <a
              role='button'
              onClick={openAdd}
              className='btn gradiant_button'
              data-bs-toggle='modal'
              data-bs-target='#exampleModal'
            >
              Add New Address
            </a>
          </div>
          <ul className='address_list'>
            {store?.address?.length > 0 ? (
              store?.address?.map((item, i) => (
                <AddressCard openDelete={openDelete} openEdit={openEdit} key={i} item={item} />
              ))
            ) : (
              <p>No Address found</p>
            )}
          </ul>
        </div>
      )}
      <div
        className='modal fade address-modal'
        id='exampleModal'
        tabindex='-1'
        aria-labelledby='exampleModalLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog modal-lg'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h1 className='modal-title fs-5' id='exampleModalLabel'>
                {dialogStatus} Address
              </h1>
              <button
                ref={closeRef}
                type='button'
                className='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
              ></button>
            </div>
            <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
              <div className='modal-body'>
                <div className='row'>
                  <div className='col-md-6'>
                    <div className='firstname mb-2'>
                      <label htmlFor='name'>Full Name</label>
                      <RHFTextField name='full_name' />
                    </div>
                    <div className='firstname mb-2'>
                      <label htmlFor='name'>Address Line 1</label>
                      <RHFTextField name='address1' />
                    </div>
                    <div className='firstname mb-2'>
                      <label htmlFor='name'>Country</label>
                      <RHFTextField name='country' />
                    </div>
                    <div className='firstname mb-2'>
                      <label htmlFor='name'>City</label>
                      <RHFTextField name='city' />
                    </div>
                    <div className='firstname mb-2'>
                      <label htmlFor='name'>Email</label>
                      <RHFTextField name='email' type='email' />
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='firstname mb-2'>
                      <label htmlFor='name'>Save Address As (Optional)</label>
                      <div className='label-tags'>
                        <div className='form-check ps-0'>
                          <input
                            className='form-check-input'
                            type='radio'
                            name='exampleRadios'
                            id='exampleRadios1'
                            value='option1'
                            onChange={e => {
                              setValue('address_type', 'home')
                            }}
                            checked={watch('address_type') === 'home'}
                          />
                          <label className='form-check-label' htmlFor='exampleRadios1'>
                            Home
                          </label>
                        </div>
                        <div className='form-check'>
                          <input
                            className='form-check-input'
                            type='radio'
                            name='exampleRadios'
                            id='exampleRadios2'
                            value='option2'
                            onChange={e => {
                              setValue('address_type', 'work')
                            }}
                            checked={watch('address_type') === 'work'}
                          />
                          <label className='form-check-label' htmlFor='exampleRadios2'>
                            Work
                          </label>
                        </div>
                        <div className='form-check'>
                          <input
                            className='form-check-input'
                            type='radio'
                            name='exampleRadios'
                            id='exampleRadios3'
                            value='option3'
                            onChange={e => {
                              setValue('address_type', 'other')
                            }}
                            checked={watch('address_type') === 'other'}
                          />
                          <label className='form-check-label' htmlFor='exampleRadios3'>
                            Other
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className='firstname mb-2'>
                      <label htmlFor='name'>Address Line 2 (Optional)</label>
                      {/* <input type='text' className='form-control' /> */}
                      <RHFTextField name='address2' />
                    </div>
                    <div className='firstname mb-2'>
                      <label htmlFor='name'>State</label>
                      <RHFTextField name='state' />
                    </div>
                    <div className='firstname mb-2'>
                      <label htmlFor='name'>Pin/ Zip Code</label>
                      <RHFTextField name='pin' />
                    </div>
                    <div className='firstname mb-2'>
                      <label htmlFor='name'>Phone</label>
                      <RHFTextField name='phone' />
                    </div>
                  </div>
                </div>
              </div>
              <div className='modal-footer'>
                <div className='checkout'>
                  <a role='button' type='submit' onClick={handleSubmit(onSubmit)} className='btn gradiant_button'>
                    {btnLoading ? <CircularProgress size={30} color='inherit' /> : 'Save Address'}{' '}
                  </a>
                  <a data-bs-dismiss='modal' role='button' className='btn primary-button'>
                    Cancel
                  </a>
                </div>
              </div>
            </FormProvider>
          </div>
        </div>
      </div>

      <ConfirmModal handleClose={handleClose} open={deletShow} deleteFunction={deleteAddress} loading={btnLoading} />
    </>
  )
}

export default Addresses
