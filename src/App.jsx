import { useState } from 'react'
import SignIn from './components/SignIn'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="h-screen relative text-white">
      <div id="window" className="bg-white/15 backdrop-blur md:rounded-3xl absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] size-full md:h-4/5 md:w-4/5">
        <SignIn />
      </div>
    </div>
  )
}

export default App
