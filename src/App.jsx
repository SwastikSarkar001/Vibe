import { useEffect, useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../firebase.config'
import SignIn from './components/SignIn'
import ChatApp from './components/ChatApp'
import './App.css'


function App() {
  const [userDetails, setUserDetails] = useState(null)
  const [displayApp, setDisplayApp] = useState(false)
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserDetails(user)
        console.log('Logged In')
      }
      else {
        setUserDetails(null)
        console.log('Not Logged In')
      }
      setDisplayApp(true)
    })
  })

  if (displayApp)
  return (
    <div className="h-screen relative text-white">
      <div id="window" className="bg-white/15 backdrop-blur md:rounded-3xl absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] size-full md:h-4/5 md:w-4/5">
        { userDetails !== null ? <ChatApp setUser={setUserDetails} /> : <SignIn />}
      </div>
    </div>
  )

  else
  return(<></>)
}

export default App
