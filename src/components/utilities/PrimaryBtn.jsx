import React from 'react'

export default function PrimaryBtn({ type = 'button', onClick, children }) {
  if (onClick) return (
    <button type={ type } onClick={ onClick } className='flex items-center gap-4 px-4 py-2 bg-fuchsia-800 hover:bg-fuchsia-700 hover:scale-[1.05] transition-all'>
			{ children }
    </button>
  )
  else return (
    <button type={ type } className='flex items-center gap-4 px-4 py-2 bg-fuchsia-800 hover:bg-fuchsia-700 hover:scale-[1.05] transition-all'>
			{ children }
    </button>
  )
}
