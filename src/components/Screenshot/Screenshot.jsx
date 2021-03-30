import React, { useState } from 'react'
import s from './Screenshot.module.css'
import Modal from '@material-ui/core/Modal'
import Fade from '@material-ui/core/Fade'
import { Backdrop } from '@material-ui/core'

const Screenshot = ({ imageId }) => {
  const [show, setShow] = useState(false)

  const handleOpen = () => {
    setShow(true)
  }

  const handleClose = () => {
    setShow(false)
  }

  return (
    <>
      <img
        className={s.image}
        src={`https://images.igdb.com/igdb/image/upload/t_screenshot_med/${imageId}.jpg`}
        alt={'screen'}
        onClick={handleOpen}
      />
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={s.modal}
        open={show}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={show}>
          <div className={s.preview}>
            <img
              onClick={handleClose}
              src={`https://images.igdb.com/igdb/image/upload/t_1080p/${imageId}.jpg`}
              alt={'preview'}
            />
          </div>
        </Fade>
      </Modal>
    </>
  )
}

export default Screenshot
