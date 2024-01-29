import { Avatar } from '@mui/material'
import React, {forwardRef} from 'react'
import '../../../public/styles/style.css'
import InputOptions from './inputOptions'
import { ChatOutlined, SendOutlined, ShareOutlined, ThumbUpAltOutlined } from '@mui/icons-material'

const Post = forwardRef(({name, descripton, message, photoUrl}, ref) => {
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
    <div ref={ref} className='post'>
        <div className="post-header">
            <Avatar src={photoUrl} >
                {name[0]}
            </Avatar>

            <div className="post-info">
                <h2>{name}</h2>
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
})

export default Post