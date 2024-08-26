import React, { useContext } from 'react'
import { auth } from '../../firebase.config'
import { signOut } from 'firebase/auth'

export default function SignOut({ setUser }) {
	const signOutFn = (e) => {
		signOut(auth).then(() => console.log('Logged Out')).catch((e) => console.err(e))
		// setUser(null)
	}
  return (
    <button type='button' onClick={ signOutFn }>
      Sign Outtt
    </button>
  )
}
