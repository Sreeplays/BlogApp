import React from 'react'
import Articles from '../../../components/Articles'
import { BiArrowFromLeft } from 'react-icons/bi'

import { countActionsOnClick } from '../../../store/actions/countActions'
const ArticleCard = () => {
  return (
    <div className='flex flex-col container mx-auto  py-10'>
      <div className='flex flex-wrap md:gap-x-5 gap-y-5 px-5 pb-10 '>
        <Articles className="w-full md:w-[calc(50%-20px)] lg-[calc(33.33%-21px)]"/>
      </div>
      <button className='mx-auto'>
        <span className='flex justify-center items-center text-primary border-primary py-2 px-4 border-2 text-center rounded-md'>More Articles <BiArrowFromLeft className='w-4 h-4 text-primary flex mx-2 mt-0.5' /></span>
      </button>
      <div className='mt-2 gap-x-4 flex items-start'>
      </div>
    </div>
  )
}

export default ArticleCard