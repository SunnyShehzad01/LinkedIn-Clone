import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SearchIcon from '@mui/icons-material/Search';
import '../../public/styles/style.css'
import HeaderOptions from './Header/HeaderOptions';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter'
import ChatIcon from '@mui/icons-material/Chat'
import NotificationsIcon from '@mui/icons-material/Notifications'
const Header = () => {
    const iconsArr = [
        {
            icon: <LinkedInIcon />,
            name: 'Home'
        },
        {
            icon: <LinkedInIcon />,
            name: 'Home'
        }
    ]
  return (
    <div className='header'>
        <div className="header-left">
            <img src="https://cdn1.iconfinder.com/data/icons/logotypes/32/square-linkedin-1024.png" alt="icon" />
            <div className="header-search">
                {/* Search icon */}
                <SearchIcon />

                <input type="text" />
            </div>
        </div>

        <div className="header-right">
            <HeaderOptions Icon={HomeIcon} title="Home" />
            <HeaderOptions Icon={SupervisorAccountIcon} title="MyNetwork" />
            <HeaderOptions Icon={BusinessCenterIcon} title="Jobs" />
            <HeaderOptions Icon={ChatIcon} title='Messaging' />
            <HeaderOptions Icon={NotificationsIcon} title='Notifications' />
            <HeaderOptions avatar="https://media.licdn.com/dms/image/D4D03AQGTaw-EKKllUw/profile-displayphoto-shrink_800_800/0/1701585919084?e=1711584000&v=beta&t=iaIuQR1JcZi1SOr70tuax_peiElLkysOpRRP0yiWYfM" 
                            title='Sunny' />
        </div>
    </div>
  )
}

export default Header