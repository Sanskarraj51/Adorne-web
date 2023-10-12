// form
import { useFormContext, Controller } from 'react-hook-form'

// @mui
import { FormHelperText } from '@mui/material'

// ----------------------------------------------------------------------

export default function RHFTextField({ name, helperText, label, ...other }) {
  const { control } = useFormContext()

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <>
          {label ? (
            <label for='exampleInputEmail1' className='form-label'>
              {label}
            </label>
          ) : null}
          <input
            className='form-control'
            id='exampleInputEmail1'
            aria-describedby='emailHelp'
            {...field}
            fullWidth
            value={typeof field.value === 'number' && field.value === 0 ? '' : field.value}
            {...other}
          />
          {error && <FormHelperText sx={{ color: 'error.main' }}>{error.message}</FormHelperText>}
        </>
      )}
    />
  )
}
