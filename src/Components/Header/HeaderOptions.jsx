import React from 'react'
import '../../../public/styles/style.css'

const HeaderOptions = ({ Icon, title }) => {
  return (
    <div className='headerOption'>
      {Icon && <Icon className='headerOption-icon' />}
      <p className='headerOption-title'>{title}</p>
    </div>
  )
}

export default HeaderOptions