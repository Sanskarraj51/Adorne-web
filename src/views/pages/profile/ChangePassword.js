import { Fragment, useState } from 'react'
import * as yup from 'yup'
import { useForm, Controller } from 'react-hook-form'
import { CircularProgress, FormHelperText } from '@mui/material'
import { yupResolver } from '@hookform/resolvers/yup'
import { useAuth } from 'src/hooks/useAuth'
import { handlePostAPI } from 'src/api-requests'

const ChangePassword = () => {
  const defaultValues2 = {
    oldpass: '',
    newpass: '',
    cpass: ''
  }
  const [btnLoading, setBtnLoading] = useState(false)
  const [oldpassT, setOldPass] = useState(false)
  const [newpassT, setNewPass] = useState(false)
  const [conpassT, setConPass] = useState(false)

  const { user, logout } = useAuth()

  // const passRegExp = '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$'
  // .matches(passRegExp, 'Invalid Password')

  const RESETschema = yup.object().shape({
    oldpass: yup.string().min(6, 'old password is required').required('old password is required'),
    newpass: yup.string().min(6).required('New password is required'),
    cpass: yup
      .string()
      .min(6)
      .required()
      .oneOf([yup.ref('newpass')], 'Confirm Passwords does not match')
  })

  const {
    control: control2,
    setError: setErrorRESET,
    handleSubmit,
    formState: { errors: errors2 }
  } = useForm({
    defaultValues2,
    mode: 'onChange',
    resolver: yupResolver(RESETschema)
  })

  const handleChangePass = async data => {
    setBtnLoading(true)
    // eslint-disable-next-line
    const resetData = {
      oldPassword: data?.oldpass,
      password: data?.newpass,
      user_id: user?.id
    }
    const res = await handlePostAPI('/update-password', resetData)
    setBtnLoading(false)
    if (res) {
      setTimeout(function () {
        logout(false)
      }, 1000)
    }
  }

  return (
    <div className='tab-pane fade' id='v-pills-settings' role='tabpanel' aria-labelledby='v-pills-settings-tab'>
      <div className='tab_title'>
        <h5>Update Password</h5>
        <a role='button' onClick={handleSubmit(handleChangePass)} type='submit' className='btn gradiant_button'>
          {btnLoading ? <CircularProgress size={30} color='inherit' /> : 'Update Password'}{' '}
        </a>
      </div>
      <div className='col-12 col-md-6'>
        <div className='firstname mb-2'>
          <label for='Password'>Old Password</label>

          <Controller
            name='oldpass'
            control={control2}
            rules={{ required: true }}
            render={({ field: { value, onChange, onBlur } }) => (
              <input className='form-control' value={value} type={oldpassT ? 'text' : 'password'} onChange={onChange} />
            )}
          />
          {errors2.oldpass && (
            <FormHelperText sx={{ color: 'error.main' }} id=''>
              {errors2.oldpass.message}
            </FormHelperText>
          )}
        </div>
        <div className='firstname mb-2'>
          <label for='Password'>New Password</label>

          <Controller
            name='newpass'
            control={control2}
            rules={{ required: true }}
            render={({ field: { value, onChange, onBlur } }) => (
              <input
                className='form-control'
                value={value}
                onBlur={onBlur}
                type={newpassT ? 'text' : 'password'}
                onChange={onChange}
              />
            )}
          />
          {errors2.newpass && (
            <FormHelperText sx={{ color: 'error.main' }} id=''>
              {errors2.newpass.message}
            </FormHelperText>
          )}
        </div>
        <div className='firstname mb-2'>
          <label for='Password'>Confirm Password</label>

          <Controller
            name='cpass'
            control={control2}
            rules={{ required: true }}
            render={({ field: { value, onChange, onBlur } }) => (
              <input
                value={value}
                onBlur={onBlur}
                type={conpassT ? 'text' : 'password'}
                onChange={onChange}
                className='form-control'
              />
            )}
          />
          {errors2.cpass && (
            <FormHelperText sx={{ color: 'error.main' }} id=''>
              {errors2.cpass.message}
            </FormHelperText>
          )}
        </div>
      </div>
    </div>
  )
}

export default ChangePassword
