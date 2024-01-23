import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SearchIcon from '@mui/icons-material/Search';
import '../../public/styles/style.css'
import HeaderOptions from './Header/HeaderOptions';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';

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
        </div>
    </div>
  )
}

export default Header