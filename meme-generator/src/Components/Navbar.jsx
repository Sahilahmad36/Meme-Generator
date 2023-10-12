import React from 'react'

// import Logo from '../assets/react.svg'
import github from '../assets/github.png'

function Navbar() {
  return (
    <>
    <header>
      <div className='row flex flex-row justify-between px-4 py-3 bg-black'>
        <div className='flex flex-row text-center  items-center'>
          {/* <img src={Logo} alt="Meme Logo" /> */}
          <img src="https://cdn.dribbble.com/users/2142371/screenshots/6071364/media/70b33e43515ffae5365f4cf4d9700e59.png" alt="Meme Logo"
            style={{width:"68px", float:"left", marginRight:"10px", borderRadius:"50%"}}
          />
          <h1 className='text-white pl-3 text-lg'>Meme Generator</h1>
        </div>
        <div className='flex flex-row text-center  items-center'>
          <a href="https://github.com/Sahilahmad36/Meme-Generator" className='flex flex-row text-center  items-center'>
            <img src={github} alt="github-logo" className='w-8'  />
            <h1 className='text-white pl-3 text-lg'>Star Me ⭐</h1>
          </a>
        </div>
      </div>
    </header>
    </>
  )
}

export default Navbar