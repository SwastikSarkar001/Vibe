import React, { useState, useRef } from 'react'
import { IconContext } from 'react-icons'
import { PiEye, PiEyeClosed } from "react-icons/pi"
import { GrLogin, GrGoogle, GrGithub, GrFacebookOption, GrLinkedin } from "react-icons/gr"

import { auth, googleProvider, facebookProvider, githubProvider } from '../../firebase.config'
import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth'

export default function RegisterDialog({ change }) {
	const initValues = {
		'username': '',
		'password': '',
		'confirm': ''
	}
	const passwordRef = useRef(null)
	const [showPass, setShowPass] = useState(false)
	const [values, setValues] = useState(initValues)
	const togglePass = (e) => {
		e.preventDefault()
		setShowPass(!showPass)
		passwordRef.current.type = passwordRef.current.type === 'password' ? 'text' : 'password'
	}
	const changeValues = (e) => {
		return setValues((prev) => {
			return { ...prev, [e.target.name]: e.target.value }
		})
	}
	const checkCredentials = (e) => {
		e.preventDefault()
		createUserWithEmailAndPassword(auth, values.username+'@vibe.com', values.password).then(({ user }) => console.log(user)).catch(e => console.error(e))
	}

	return (
		<div className='flex flex-col items-center justify-center min-h-full gap-5'>
			<h1 className='text-4xl font-bold font-grotesk mb-5'>Register to Vibe!</h1>
			<form className='flex flex-col items-center justify-center gap-8 w-full' onSubmit={ checkCredentials } >
				<div className='relative w-1/2 rounded-3xl focus-within:selected'>
					<input type="text" name="username" id="username" value={ values.username } onChange={ changeValues } className='size-full text-black rounded-3xl px-4 py-2' />
					<label htmlFor="username" className={`absolute text-gray-500 top-1/2 left-4 translate-y-[-50%] transition-all ${ (values.username !== '') ? 'has-data' : '' } child`}>New Username</label>
				</div>
				<div className='relative w-1/2 rounded-3xl focus-within:selected'>
					<input type="password" name="password" id="password" value={ values.password } onChange={ changeValues } className={`size-full text-black rounded-3xl px-4 py-2 ${ (values.password !== values.confirm) ? 'border-2 border-red-500' : '' }`} ref={ passwordRef } />
					<label htmlFor="password" className={`absolute text-gray-500 top-1/2 left-4 translate-y-[-50%] transition-all ${ (values.password !== '') ? 'has-data' : '' } child`}>New Sneaky Password</label>
					{
						(values.password !== '') &&
						<button type='button' onClick={togglePass} className='absolute top-1/2 right-4 translate-y-[-50%]'>
						<IconContext.Provider value={{ stroke: "black", className: "icon" }}>
							{ showPass ? <PiEyeClosed /> : <PiEye /> }
						</IconContext.Provider>
						</button>
					}
				</div>
				<div className='relative w-1/2 rounded-3xl focus-within:selected'>
					<input type="text" name="confirm" id="confirm" value={ values.confirm } onChange={ changeValues } className={`size-full text-black rounded-3xl px-4 py-2 ${ (values.password !== values.confirm) ? 'border-2 border-red-500' : '' }`} />
					<label htmlFor="confirm" className={`absolute text-gray-500 top-1/2 left-4 translate-y-[-50%] transition-all ${ (values.confirm !== '') ? 'has-data' : '' } child`}>Confirm Password</label>
				</div>
				<button type='submit' className='flex items-center gap-2 px-4 py-2 bg-fuchsia-800 hover:bg-fuchsia-700 hover:scale-[1.05] transition-all'>
					<div><GrLogin /></div>
					<div>Create Account</div>
				</button>
			</form>
			<button onClick={change}>Already an user? Login to Vibe!</button>
		</div>
	)
}