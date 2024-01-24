import React from 'react'
import '../../../public/styles/style.css'
import { Avatar } from '@mui/material'

const HeaderOptions = ({ avatar, Icon, title }) => {
  return (
    <div className='headerOption'>
      {Icon && <Icon className='headerOption-icon' />}
      {avatar && <Avatar className='headerOption-icon' src={avatar} />}
      <p className='headerOption-title'>{title}</p>
    </div>
  )
}

export default HeaderOptions