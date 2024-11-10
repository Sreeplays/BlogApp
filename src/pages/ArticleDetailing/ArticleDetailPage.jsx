import React from 'react'

import MainLayout from '../../components/MainLayout.jsx'
import CTA from '../Home/Container/CTA.jsx'
import BreadCrumbs from '../../components/BreadCrumbs.jsx'
import { BiArrowFromLeft, BiArrowFromRight, BiSolidArrowFromRight } from 'react-icons/bi';
import images from '../../constants/images.js';
import { Link } from 'react-router-dom';
import SuggestedPosts from './SuggestedPosts/suggestedPosts.jsx';
import CommentsContainer from '../../components/Comments-Comp/commentsContainer.jsx';
function history_back() {
  window.history.back();
}
const ArticleDetailPage = () => {
  const postsData = [
    {
      _id: 1,
      title: 'Future Of Work',
      image: images.postImage,
      createdAt: "2024-06-25"
    },
    {
      _id: 1,
      title: 'Future Of Work',
      image: images.postImage2,
      createdAt: "2024-06-25"
    },
    {
      _id: 1,
      title: 'Future Of Work',
      image: images.postImage,
      createdAt: "2024-06-25"
    },
    {
      _id: 1,
      title: 'Future Of Work',
      image: images.postImage2,
      createdAt: "2024-06-25"
    }
  ]
  const tagsData = [
    "Technical",
    "Development",
    "Ai Technologies",
    "Ai Growth"
  ]
  return (
    <MainLayout>
        <section className='container mx-auto max-w-5xl flex flex-col px-5 py-5 items-center lg:flex-row lg:items-start lg:gap-x-5'>
            <article className='flex-1'>
                <button><BiSolidArrowFromRight  onClick={history_back} className='w-6 h-6 text-opacity-80 text-gray-800 mb-4'/></button>
                <img className='rounded-xl w-full lg:w-1/2' src={images.postImage} alt="" />   
                <Link to='/blog?category=selectedCategory' className='text-primary font-roboto text-sm inline-block mt-4'>Robotics</Link>
                <h1 className='text-3xl font-bold font-roboto mt-2 text-dark-hard'> Future Of Work</h1>
                <div className='mt-4 text-dark-soft mb-10'>
                  <p className='leading-7'>Voluptate aute anim ut sunt enim cillum veniam. Id nostrud irure eiusmod ullamco sint ullamco velit Lorem adipisicing magna nulla sint. Laboris nulla elit voluptate minim sint Lorem. Magna aliquip veniam anim sunt exercitation eu labore dolor commodo deserunt aute eu id.

Culpa deserunt magna do sit cillum. Sit dolore elit tempor ea sint ut sint veniam. Dolor eiusmod in consectetur qui veniam dolore id anim occaecat non excepteur. Nulla sint sit ut dolore cillum ut cupidatat quis in minim culpa consectetur. Duis fugiat officia id esse culpa ex cillum consequat deserunt.</p>
                </div>
                <CommentsContainer />
            </article>
            <SuggestedPosts header="Latest Articles" posts={postsData} tags={tagsData}/>
        </section>
    </MainLayout>
  )
}

export default ArticleDetailPage