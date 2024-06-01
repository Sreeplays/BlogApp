import React from 'react'
import images from '../../../constants/images.js'
const CTA = () => {
  return (
    <>
        <svg
        className="w-full h-auto max-h-36 translate-y-[1px]"
        preserveAspectRatio="none"
        viewBox="0 0 2160 263"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        >
            <path
                id="Wave"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2160 262.5H0V0C360 80 720 120 1080 120C1440 120 1800 80 2160 0V262.5Z"
                fill="#0D2436"
            />
        </svg>
        <section className='relative bg-dark-hard px-5 text-center'>
          
          <div className='container grid grid-cols-12 mx-auto'>
            <div className='col-span-12'>
              <h2 className='text-white font-roboto text-3xl font-bold text-center'>Get our stories delivered from us to your inbox weekly.</h2>
              <div className='w-full max-w-[494px] space-y-4 lg:space-y-1 pt-8 mx-auto lg:grid lg:grid-cols-2 lg:gap-x-4'> 
                <input type="text" className='rounded-xl w-full py-3  px-6  items-center placeholder:font-roboto placeholder:italic placeholder:font-semibold focus:outline-none placeholder:text-dark-light shadow-[inset_-12px_-8px_40px_#46464620]' placeholder='Enter Your Email'/>
                <button className='py-3 px-3 rounded-xl bg-primary w-full lg:w-36'>Get Started !</button>
              </div>
              <p className='text-dark-light text-sm leading-7 mt-6'><span className='font-bold italic text-[#B3BAC5]'>Get a response tomorrow</span> if you submit by 9pm today. If we received after 9pm will get a reponse the following day.</p>
            </div>
          </div>
          <hr className='border-dark-soft mt-10 pb-4'/>
          <div className='grid grid-cols-4 gap-x-2 mx-auto lg:w-1/2'>
            <img src={images.FooterLogo} alt="Logo" className='lg:w-36 w-18 mt-[-10px]'/>
            <a href="#" className='text-gray-200 text-xs'>Terms & Conditions</a>
            <a href="#" className='text-gray-200 text-xs'>Privacy Policy</a>
            <a href="#" className='text-gray-200 text-xs'>About</a>
          </div>
        </section>
    </>
  )
}

export default CTA