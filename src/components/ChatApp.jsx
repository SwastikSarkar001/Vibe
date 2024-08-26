import React from 'react'
import PropTypes from 'prop-types'
import SignOut from './SignOut'

export default function ChatApp({ setUser }) {
  return (
    <div>
      <SignOut setUser={setUser} />
    </div>
  )
}

ChatApp.propTypes = {
    setUser: PropTypes.func.isRequired  
}