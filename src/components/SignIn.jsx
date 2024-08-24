import React, { useRef, useState } from 'react'
import { PiEye, PiEyeClosed } from "react-icons/pi"
import { GrLogin, GrGoogle, GrGithub, GrFacebookOption, GrLinkedin } from "react-icons/gr"
import { IconContext } from 'react-icons'

function SignInDialog({ change }) {
	const initValues = {
		'username': '',
		'password': '',
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

	}

	return (
		<div className='flex flex-col items-center justify-center min-h-full gap-5'>
			<h1 className='text-4xl font-bold font-grotesk mb-5'>Sign In to your account</h1>
			<form className='flex flex-col items-center justify-center gap-8 w-full' onSubmit={ checkCredentials } >
				<div className='relative w-1/2 rounded-3xl focus-within:selected'>
					<input type="text" name="username" id="username" value={ values.username } onChange={ changeValues } className='size-full text-black rounded-3xl px-4 py-2' />
					<label htmlFor="username" className={`absolute text-gray-500 top-1/2 left-4 translate-y-[-50%] transition-all ${ (values.username !== '') && 'has-data' } child`}>Your Username</label>
				</div>
				<div className='relative w-1/2 rounded-3xl focus-within:selected'>
					<input type="password" name="password" id="password" value={ values.password } onChange={ changeValues } className='size-full text-black rounded-3xl px-4 py-2' ref={ passwordRef } />
					<label htmlFor="password" className={`absolute text-gray-500 top-1/2 left-4 translate-y-[-50%] transition-all ${ (values.password !== '') && 'has-data' } child`}>Your Sneaky Password</label>
					{
						(values.password !== '') &&
						<button type='button' onClick={togglePass} className='absolute top-1/2 right-4 translate-y-[-50%]'>
						<IconContext.Provider value={{ stroke: "black", className: "icon" }}>
							{ showPass ? <PiEyeClosed /> : <PiEye /> }
						</IconContext.Provider>
						</button>
					}
				</div>
				<button type='submit' className='flex items-center gap-2 px-4 py-2 bg-fuchsia-800 hover:bg-fuchsia-700 hover:scale-[1.05] transition-all'>
					<div><GrLogin /></div>
					<div>Sign In</div>
				</button>
			</form>

			<div className='text-center text-xl'>
				<p>or</p>
				<p className='text-lg'>Sign in using :</p>
			</div>
			<div className='w-3/5 px-8'>
				<div className='grid grid-cols-2 gap-4'>
					<button className='flex items-center gap-4 px-4 py-2 bg-fuchsia-800 hover:bg-fuchsia-700 hover:scale-[1.05] transition-all'>
						<div><GrGoogle /></div>
						<div>Google</div>
					</button>
					<button className='flex items-center gap-4 px-4 py-2 bg-fuchsia-800 hover:bg-fuchsia-700 hover:scale-[1.05] transition-all'>
						<div><GrGithub /></div>
						<div>GitHub</div>
					</button>
					<button className='flex items-center gap-4 px-4 py-2 bg-fuchsia-800 hover:bg-fuchsia-700 hover:scale-[1.05] transition-all'>
						<div><GrLinkedin /></div>
						<div>LinkedIn</div>
					</button>
					<button className='flex items-center gap-4 px-4 py-2 bg-fuchsia-800 hover:bg-fuchsia-700 hover:scale-[1.05] transition-all'>
						<div><GrFacebookOption /></div>
						<div>Facebook</div>
					</button>
				</div>
			</div>
			<button onClick={change}>New User? Register to Vibe!</button>
		</div>
	)
}

function RegisterDialog({ change }) {

	return (
		<div className='flex flex-col items-center justify-center h-[inherit]'>
			<h1 className='text-4xl font-bold font-grotesk'>Register to Vibe!</h1>
			<button onClick={change}>Already an user? Login to Vibe!</button>
		</div>
	)
}

export default function SignIn() {
	const [loginOrRegister, setLoginOrRegister] = useState(false)  // false for sign in, true for register
	const change = () => setLoginOrRegister(!loginOrRegister)
  return (
    <div className="size-full flex flex-col md:flex-row">
      <div className="md:w-[35%] md:h-full flex flex-col items-center justify-center md:border-r-2 md:border-white/50">
        <h1 className="font-aladin text-[8rem] md:text-[10rem] leading-[1] bg-gradient-to-l from-[#D211D6] to-[#4C09A1] text-transparent bg-clip-text w-max">Vibe</h1>
        <h2 className='font-akaya font-lg md:text-xl font-[500]'>Connect. Grow. Vibe.</h2>
      </div>
      <div className="md:w-[65%] md:h-full">
        { loginOrRegister ? <RegisterDialog change={ change } /> : <SignInDialog change={ change } /> }
      </div>
    </div>
  )
}
