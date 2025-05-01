import React from 'react'
import Articles from '../../../components/Articles'
import { BiArrowFromLeft } from 'react-icons/bi'
import {useQuery} from '@tanstack/react-query'
import { getAllPosts } from '../../../services/index/posts'
import toast from 'react-hot-toast'
const ArticleCard = () => {
  const {data, isLoading: postLoading, isError: postError} = useQuery({
    queryFn: () => getAllPosts(),
    queryKey: ["posts"],
    onError: (error) => {
      toast.error(error)
      console.log(error)
    }
  })
  return (
    <div className='flex flex-col container mx-auto  py-10'>
      <div className='grid grid-cols-1 md:grid-cols-3 md:gap-x-3 lg:gap-x-5 gap-x-2 gap-y-5 px-5 pb-10 '>
        {!postLoading && !postError && data.map((post) => (
          <Articles key={post._id} post={post} className="w-full"/>
        ))}
        
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