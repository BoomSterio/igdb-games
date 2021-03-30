import React from 'react'
import s from './Preloader.module.css'
import joystick from '../../assets/images/joystick.png'

const Preloader = () => {
  return (
    <div className={s.container}>
      <img className={s.image} src={joystick} alt={'Loading...'}/>
    </div>

  )
}

export default Preloader
