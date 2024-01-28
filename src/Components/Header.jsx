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
import { useDispatch } from 'react-redux';
import { logout } from '../features/userSlice';
import { getAuth, signOut } from 'firebase/auth';

const Header = () => {
    const dispatch = useDispatch()
    const auth = getAuth()

    const logoutOfApp = () => {
        dispatch(logout())

        signOut(auth)
    }

    const headerOptionDetails = [
        {
            id:1,
            icon: <HomeIcon />,
            title: 'Home'
        },
        {
            id:2,
            icon: <SupervisorAccountIcon />,
            title: 'My Network'
        },
        {
            id:3,
            icon: <BusinessCenterIcon />,
            title: 'Jobs'
        },
        {
            id:4,
            icon: <ChatIcon />,
            title: 'Messaging'
        },
        {
            id:5,
            icon: <NotificationsIcon />,
            title: 'Notifications'
        },
        {
            id:6,
            avatar: 'https://media.licdn.com/dms/image/D4D03AQGTaw-EKKllUw/profile-displayphoto-shrink_800_800/0/1701585919084?e=1711584000&v=beta&t=iaIuQR1JcZi1SOr70tuax_peiElLkysOpRRP0yiWYfM',
            title: "LogOut",
            onClick: logoutOfApp
        }
    ]

  return (
    <div className='header'>
        <div className="header-left">
            <img src="https://cdn1.iconfinder.com/data/icons/logotypes/32/square-linkedin-1024.png" alt="icon" />
            <div className="header-search">
                {/* Search icon */}
                <SearchIcon />

                <input type="text" placeholder='search'/>
            </div>
        </div>

        <div className="header-right">
            {/* {
                headerOptionDetails.map((details)=> {
                    return (
                        <HeaderOptions 
                            key={details.id} 
                            Icon={details.icon}
                            title={details.title}
                            avatar={details.avatar}
                            onClick={details.onClick}
                        />
                    )
                })
            } */}
            <HeaderOptions Icon={HomeIcon} title="Home" />
            <HeaderOptions Icon={SupervisorAccountIcon} title="MyNetwork" />
            <HeaderOptions Icon={BusinessCenterIcon} title="Jobs" />
            <HeaderOptions Icon={ChatIcon} title='Messaging' />
            <HeaderOptions Icon={NotificationsIcon} title='Notifications' />
            <HeaderOptions avatar="https://media.licdn.com/dms/image/D4D03AQGTaw-EKKllUw/profile-displayphoto-shrink_800_800/0/1701585919084?e=1711584000&v=beta&t=iaIuQR1JcZi1SOr70tuax_peiElLkysOpRRP0yiWYfM" 
                            title='LogOut' onClick={logoutOfApp} />
        </div>
    </div>
  )
}

export default Header