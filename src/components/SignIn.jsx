import React, { useState } from 'react'
import SignInDialog from './SignInDialog'
import RegisterDialog from './RegisterDialog'

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
