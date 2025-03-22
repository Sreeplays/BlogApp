import React from 'react'
import { useState } from 'react';

const CommentsForm = ({ btnLabel, formSubmitHandler }) => {
const [value, setValue] = useState("")
  const submitHandler = (e) => {
    e.preventDefault();
    formSubmitHandler(value);
    setValue("") // Clear the input field after submission
  }
  return (
    <form onSubmit={submitHandler}>
      <div className='flex flex-col items-end rounded-lg p-1 pr-11 md:pr-2'>
      <textarea id="" rows={7} className='text-black w-full focus:outline-none h-max-[250px] rounded-lg placeholder:px-1 placeholder:text-base px-5 mx-[-10px] py-5' placeholder='Leave a comment...' value={value} onChange={(e) => setValue(e.target.value)}></textarea>
      <button className='bg-primary text-white py-2.5 px-6 rounded-lg mt-4 mb-4 ' onSubmit={formSubmitHandler}>{btnLabel}</button>
      </div>
    </form>
  )
}

export default CommentsForm
