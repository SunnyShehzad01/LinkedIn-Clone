import React from 'react'
import '../../../public/styles/style.css'
import { Avatar } from '@mui/material'

const Sidebar = () => {

    const recentHashtags = ['reactjs', 'programming', 'softwareengineering', 'design', 'developer']

  return (
    <div className='sidebar'>
        <div className="sidebar-top">
            <img src="https://previews.123rf.com/images/kittikornphongok/kittikornphongok1505/kittikornphongok150501320/40269755-colorful-watercolor-grunge-texture-background-soft-background.jpg" 
                alt="cover-img" />
            <Avatar className='sidebar-avatar' />

            <h2>Sunny Shehzad</h2>
            <h4>shehzad415072@gmail.com</h4>
        </div>

        <div className="sidebar-stats">
            <div className="sidebar--stat">
                <p>Who viewed you</p>
                <p className='sidebar-statNumber'>2,524</p>
            </div>
            <div className="sidebar--stat">
                <p>Views on post</p>
                <p className='sidebar-statNumber'>6,7860</p>
            </div>
        </div>

        <div className="sidebar-bottom">
            <p className='recent'>Recent</p>
            {
                recentHashtags.map((tags, index) => {
                    return (
                        <div className='sidebar-recentTags' key={index}>
                            <p>#{tags}</p>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Sidebar