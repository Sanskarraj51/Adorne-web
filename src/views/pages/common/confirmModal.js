import { CircularProgress, Dialog, DialogContent, DialogTitle, Slide } from '@mui/material'
import React from 'react'

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='down' ref={ref} {...props} />
})

const ConfirmModal = ({ open, handleClose, deleteFunction, loading }) => {
  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby='alert-dialog-slide-description'
    >
      <DialogTitle>
        <div class='modal-header'>
          <h1 class='modal-title fs-5' id='staticBackdropLabel'>
            Are you Sure?
          </h1>
          <button type='button' onClick={handleClose} class='btn-close' aria-label='Close'></button>
        </div>
      </DialogTitle>
      <DialogContent>
        <div class=' address-modal'>
          <div class='modal-dialog'>
            <div class='modal-content'>
              <div class='modal-body'>This is delete permantely. Please make sure you want to delete this.</div>
              <div class='modal-footer'>
                <div class='checkout'>
                  <a role='button' onClick={deleteFunction} class='btn gradiant_button'>
                    {loading ? <CircularProgress size={30} color='inherit' /> : 'Delete'}{' '}
                  </a>
                  <a role='button' onClick={handleClose} class='btn primary-button'>
                    Cancel
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default ConfirmModal
