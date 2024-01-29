import React from 'react'
import '../../../public/styles/style.css'
import { Avatar } from '@mui/material'
import { useSelector } from 'react-redux'
import { selectUser } from '../../features/userSlice'

const HeaderOptions = ({ avatar, Icon, title, onClick }) => {
  const user = useSelector(selectUser)
  return (
    <div onClick={onClick} className='headerOption'>
      {Icon && <Icon className='headerOption-icon' />}
      {avatar && <Avatar className='headerOption-icon' src={user?.photoUrl} >{user?.displayName[0]}</Avatar>}
      <p className='headerOption-title'>{title}</p>
    </div>
  )
}

export default HeaderOptions