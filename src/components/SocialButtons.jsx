import React from 'react'
import { AiFillFacebook, AiFillInstagram, AiFillRedditSquare, AiFillTwitterSquare, AiOutlineWhatsApp } from 'react-icons/ai'
import { FiFacebook } from 'react-icons/fi'

const SocialButtons = ({url, title}) => {
  return (
    <div className=''>
        <h4 className='text-dark-hard font-roboto font-bold text-md md:text-xl px-2 pt-4 pb-[-16px]'>Share to:</h4>
        <div className='w-full flex justify-between pl-3'>
          <a href={'https://www.facebook.com/dialog/share?app_id=966768428586484&display=popup&href=' + url} className='' >
            <AiFillFacebook  className='w-10 h-auto fill-[#3b5998]'/>
          </a> 
          <a href={'https://api.whatsapp.com/send/?text=' + url} className='' >
            <AiOutlineWhatsApp  className='w-10 h-auto fill-[#25D336]'/>
          </a> 
          <a href={'https://www.twitter.com/intent/tweet?url=' + url}  className='' >
            <AiFillTwitterSquare  className='w-10 h-auto fill-[#00acee]'/>
          </a> 
          <a href={'https://www.reddit.com/submit?url=' + url + '&title=' + title}  className='' >
            <AiFillRedditSquare  className='w-10 h-auto fill-[#ff4500]'/>
          </a> 
        </div>
          
    </div>
  )
}

export default SocialButtons