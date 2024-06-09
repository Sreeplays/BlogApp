import React from 'react'

import MainLayout from '../../components/MainLayout.jsx'
import CTA from '../Home/Container/CTA.jsx'
import BreadCrumbs from '../../components/BreadCrumbs.jsx'
import { BiArrowFromLeft, BiArrowFromRight, BiSolidArrowFromRight } from 'react-icons/bi';
import images from '../../constants/images.js';
import { Link } from 'react-router-dom';

const breadCrumbsData = [
  {name: "Home", link: "/"},
  {name: "Blog", link: "/blog"},
  {name: "Article Heading", link: "/blog/1"}
];
const URL = window.location.href;
const previousURL = URL.split("scheme/").join("");
function history_back() {
  window.history.back();
}
const ArticleDetailPage = () => {
  return (
    <MainLayout>
        <section className='container mx-auto max-w-5xl flex flex-col px-5 py-5 items-center'>
            <article className='flex-1'>
                <button><BiSolidArrowFromRight  onClick={history_back} className='w-6 h-6 text-opacity-80 text-gray-800'/></button>
                <img className='rounded-xl w-full' src={images.postImage2} alt="" />   
                <Link to='/blog?category=selectedCategory' className='text-primary font-roboto text-sm inline-block mt-4'>Robotics</Link>
                <h1 className='text-3xl font-bold font-roboto mt-2 text-dark-hard'> Future Of Work</h1>
                <div className='mt-4 text-dark-soft'>
                  <p className='leading-7'>Voluptate aute anim ut sunt enim cillum veniam. Id nostrud irure eiusmod ullamco sint ullamco velit Lorem adipisicing magna nulla sint. Laboris nulla elit voluptate minim sint Lorem. Magna aliquip veniam anim sunt exercitation eu labore dolor commodo deserunt aute eu id.

Culpa deserunt magna do sit cillum. Sit dolore elit tempor ea sint ut sint veniam. Dolor eiusmod in consectetur qui veniam dolore id anim occaecat non excepteur. Nulla sint sit ut dolore cillum ut cupidatat quis in minim culpa consectetur. Duis fugiat officia id esse culpa ex cillum consequat deserunt.</p>
                </div>
            </article>
        </section>
    </MainLayout>
  )
}

export default ArticleDetailPage