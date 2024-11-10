import React from 'react'

const CommentsForm = () => {
  return (
    <form>
      <textarea id="" rows={7} className='text-black w-full focus:outline-none h-max-[250px] rounded-lg placeholder:px-1 placeholder:text-base px-2 mx-[-10px] py-3.5' placeholder='Leave a comment...'></textarea>
      <button className='bg-primary text-white py-2 px-2.5 rounded-lg mt-4 mb-4 -ml-1'>Submit</button>
    </form>
  )
}

export default CommentsForm
