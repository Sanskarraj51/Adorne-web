import React from 'react'
/* eslint-disable react/no-unstable-nested-components */
// @mui
import { Dialog, DialogTitle, DialogContent, Typography, Breakpoint, IconButton, Slide } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import Icon from 'src/@core/components/icon'
import LoginForm from 'src/views/pages/login'

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='down' ref={ref} {...props} />
})

export default function FormDialog({ open, setOpen, title, id, log, maxWidth, display_close_icon = true }) {
  const theme = useTheme()

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      fullWidth
      TransitionComponent={Transition}
      maxWidth={maxWidth || 'xs'}
      sx={{
        '& .MuiDialog-paper': {
          minHeight: '200px'
        }
      }}
    >
      <DialogTitle>
        <Typography sx={{ fontSize: 22, fontWeight: 'bold' }} color={theme.palette.text.primary}>
          {title}
        </Typography>
        {display_close_icon && (
          <IconButton
            aria-label='close'
            onClick={handleClose}
            sx={{
              color: 'text.primary',
              position: 'absolute',
              right: 15,
              top: 15
            }}
          >
            <Icon icon='material-symbols:close' style={{ width: 26, height: 24 }} />
          </IconButton>
        )}
      </DialogTitle>
      <DialogContent>{DialogContentCheck(title)}</DialogContent>
    </Dialog>
  )

  function DialogContentCheck(title, id) {
    switch (title) {
      case 'Login':
        return <LoginForm type='Add' handleClose={handleClose} />
      default:
        return null
    }
  }
}
