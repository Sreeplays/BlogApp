import React from 'react'
import { Link } from 'react-router-dom'

const SuggestedPosts = ({header, posts = [], tags}) => {

  return (
    <div className={"w-full shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-lg p-4 ml-2 lg:mt-10 ${className} lg:max-w-[300px] mr-6 md:mr-0"}>
        <h2 className='font-roboto font-bold text-dark-hard'>{header}</h2>
        <div className='grid gap-y-5 mt-5 md:grid-cols-2 md:gap-2 lg:grid-cols-1'>
          {posts.map((item) =>( 
            <div key={item._id} className='flex space-x-3 flex-nowrap items-center'>
              <img src={item.image} alt="latest-posts" className='rounded-lg aspect-square object-cover w-20'/>
              <div className='grid grid-rows-2'>
              <p className='font-roboto font-semibold text-lg text-dark-hard'> {item.title} </p>
              <span className='text-xs opacity-55'>
                {new Date(item.createdAt).toLocaleDateString("en-US", {
                  day: "numeric",
                  month: "short",
                  year: "numeric"
                })}
              </span>
              </div>
            </div>
          ))}
        </div>
        <h2 className='font-semibold font-roboto text-dark-hard mt-4'>Tags:</h2>
        <div className='flex flex-wrap gap-x-2 gap-y-2 mt-4'>
          {
            tags.map((item , index) => (
              <Link className='rounded-md px-3 py-1.5 bg-primary text-sm text-white inline-block font-roboto ' key={index}>{item}</Link>
            ))
          }
        </div>
    </div>
  )
}

export default SuggestedPosts