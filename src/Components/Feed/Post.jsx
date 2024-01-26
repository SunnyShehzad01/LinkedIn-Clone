import { Avatar } from '@mui/material'
import React from 'react'
import '../../../public/styles/style.css'
import InputOptions from './inputOptions'
import { ChatOutlined, SendOutlined, ShareOutlined, ThumbUpAltOutlined } from '@mui/icons-material'

const Post = ({name, descripton, message, photoUrl}) => {
    const postButtonDetails = [
        {
            icon: ThumbUpAltOutlined,
            title: "Like",
            color: "gray"
        },
        {
            icon: ChatOutlined,
            title: "Comment",
            color: "gray"
        },
        {
            icon: ShareOutlined,
            title: "Share",
            color: "gray"
        },
        {
            icon: SendOutlined,
            title: "Send",
            color: "gray"
        }
    ]
  return (
    <div className='post'>
        <div className="post-header">
            <Avatar />

            <div className="post-info">
                <h2>Sunny Shehzad</h2>
                <p>{descripton}</p>
            </div>
        </div>

        <div className="post-body">
            <p>{message}</p>
        </div>

        <div className="post-buttons">
            {
                postButtonDetails.map((detail, index)=> {
                    return (
                        <InputOptions key={index} Icon={detail.icon} title={detail.title} color={detail.color} />
                    )
                })
            }
        </div>
    </div>
  )
}

export default Post