import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="logoContainer">
        <Image src="/pictures/logo.png" width="40" height="40" objectFit='contain' />
        <span className="logoName">Fyler</span>
      </div>
      <div className="naviesContainer">
        <span className='navies'>Features</span>
        <span className='navies'>Team</span>
        <span className='navies'>Sign in</span>
      </div>
    </div>
  )
}

export default Navbar