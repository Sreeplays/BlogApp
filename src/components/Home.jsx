import React from 'react'
import Blog from '../assets/BlogApp.png'
const Home = () => {
  return (
    <div>
      <div name='home' className='w-full h-screen flex flex-col justify-between'>
        <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
            <div className='flex flex-col justify-between md:justify-center w-full pl-10 pr-10 py-8'>
                <h1 className='py-3 text-xl md:text-3xl font-bold'>Sreeplays</h1>
                <p className='md:text-lg text-sm'>Welcome to Sreeplays! You can write out all your heart here and read as much as the blogs are there.</p>
            </div>
        <div>
          <img className=' px-20' src={Blog} alt="/" />
        </div>
      </div>
      </div>
    </div>
  )
}

export default Home