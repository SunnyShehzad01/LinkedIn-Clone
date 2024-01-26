import React, { useEffect, useState } from 'react'
import CreateIcon from '@mui/icons-material/Create'
import '../../../public/styles/style.css'
import InputOptions from './inputOptions'
import ImageIcon from '@mui/icons-material/Image'
import SubscriptionsIcon from '@mui/icons-material/Subscriptions'
import EventNoteIcon from '@mui/icons-material/EventNote'
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay'
import Post from './Post'
import {db} from '../../firebase'
import { addDoc, collection, onSnapshot, orderBy, query, serverTimestamp } from 'firebase/firestore'

const Feed = () => {
    const [input, setInput] = useState('')
    const [posts, setPosts] = useState([])
    const colRef = collection(db, 'posts')
    const q = query(colRef, orderBy('timestamp'))

    useEffect(()=> {

        // Old way of getting realTime update of firestore db
        // db.collection("posts").onSnapshot((snapshot) => 
        //     setPosts(
        //         snapshot.docs.map((doc) => ({
        //             id: doc.id,
        //             data: doc.data()
        //         }))
        //     )
        // )
        // console.log(db);

        //Onsnapshot - used to get realtime update of the db, if anything changes.
        onSnapshot(colRef, (snapshot) => {
            setPosts(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data()
                }))
            )
        })
        console.log(db);
    }, [])

    const sendPost = e => {
        e.preventDefault()

        //  Old ways of using firestore database
        // db.collection('posts').add({
        //     name: 'Sunny Shehzad',
        //     description: 'This is a test.',
        //     message: "This is a message"
        // })

        // New way of adding into firestore database
        addDoc(colRef, {
            name: "Sunny Shehzad",
            description: "This is a test",
            message: input,
            photoUrl: '',
            timestamp: serverTimestamp()
        }).then(() => {
            setInput('')
        }).catch((err) => console.log(err) )
        
    }

    const inputOptionDetails =[
        {
            icon: ImageIcon,
            title: "Photo",
            color: "#70B5F9"
        },
        {
            icon: SubscriptionsIcon,
            title: "Video",
            color: "#E7A33E"
        },
        {
            icon: EventNoteIcon,
            title: "Event",
            color: '#7FC15E'
        },
        {
            icon: CalendarViewDayIcon,
            title: "Write article",
            color: "#7FC15E"
        }
    ]
  return (
    <div className='feed'>
        <div className="feed-inputContainer">
            <div className="feed-input">
                <CreateIcon />
                <form>
                    <input value={input} onChange={e => setInput(e.target.value)} type="text" />
                    <button onClick={sendPost} type='submit'>Send</button>
                </form>
            </div>

            <div className="feed-inputOptions">
                {
                    inputOptionDetails.map((detail, index)=>{
                        return (
                            <InputOptions key={index} Icon={detail.icon} title={detail.title} color={detail.color} />
                        )
                    })
                }
            </div>
        </div>
        <div className="posts">
                {
                    posts.map(({id, data: {name, description, message, photoUrl}})=> (
                        <Post 
                            key={id} 
                            name={name} 
                            descripton={description} 
                            message={message} 
                            photoUrl={photoUrl} 
                        />
                    ))
                }
            </div>
    </div>
  )
}

export default Feed