import React from 'react'
import Articles from '../../../components/Articles'
import { BiArrowFromLeft } from 'react-icons/bi'
import { useDispatch, useSelector } from 'react-redux'
import { countActionsOnClick } from '../../../store/actions/countActions'
const ArticleCard = () => {
  const dispatch = useDispatch();
  const count = useSelector(state => state.count)
  const counChangeHandler = (type) => {
    dispatch(countActionsOnClick(type))
  }
  return (
    <div className='flex flex-col container mx-auto  py-10'>
      <div className='flex flex-wrap md:gap-x-5 gap-y-5 px-5 pb-10 '>
        <Articles className="w-full md:w-[calc(50%-20px)] lg-[calc(33.33%-21px)]"/>
      </div>
      <button className='mx-auto'>
        <span className='flex justify-center items-center text-primary border-primary py-2 px-4 border-2 text-center rounded-md'>More Articles <BiArrowFromLeft className='w-4 h-4 text-primary flex mx-2 mt-0.5' /></span>
      </button>
      <div className='mt-2 gap-x-4 flex items-start'>
        <button onClick={() => counChangeHandler('INCREASE')}>Increase</button>
        {count.number}
        <button onClick={() => counChangeHandler('DECREASE')}>Decrease</button>
      </div>
    </div>
  )
}

export default ArticleCard