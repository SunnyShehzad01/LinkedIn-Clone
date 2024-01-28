import React, { useState } from 'react'
import '../../../public/styles/style.css'
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { useDispatch } from 'react-redux'
import { login } from '../../features/userSlice'

const Login = () => {

    const auth = getAuth()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [profilePic, setProfilePic] = useState('')
    const dispatch = useDispatch()

    const register = () => {
        if(!name) {
            return alert("Please enter a Full Name!")
        }

        createUserWithEmailAndPassword(auth, email, password)
            .then((userAuth) => {
                updateProfile(auth.currentUser, {
                    displayName: name,
                    photoURL: profilePic
                })
                .then(() => {
                    dispatch(
                        login({
                            email: userAuth.user.email,
                            uid: userAuth.user.uid,
                            displayName: name,
                            profilePic: profilePic
                        }))
                })
            })
            .catch((error) => console.log(error))
    }

    const loginToApp = (e) => {
        e.preventDefault()

        signInWithEmailAndPassword(auth, email, password)
            .then((userAuth) => {
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: userAuth.user.displayName,
                    profilePic: userAuth.user.photoURL
                }))
            })
            .catch(error => console.log(error))
    }
  return (
    <div className='login'>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/2560px-LinkedIn_Logo.svg.png" 
            alt="linkedIn" />

        <form >
            <input value={name} onChange={e => setName(e.target.value)} type="text" placeholder=' Full Name (reguired if regestering)' />

            <input value={profilePic} onChange={e => setProfilePic(e.target.value)} type="text" placeholder='profile picture Url (Optional'/>

            <input value={email} onChange={e => setEmail(e.target.value)} type="Email" placeholder='Email' />

            <input value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder='password'/>

            <button type='submit' onClick={loginToApp}>Sign In</button>
        </form>

        <p>Not a member ? <span className='login-register' onClick={register}>Register Now</span></p>
    </div>
  )
}

export default Login