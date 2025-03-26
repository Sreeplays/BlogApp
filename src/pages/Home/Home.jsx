import React from 'react'
import MainLayout from '../../components/MainLayout'
import Hero from './Container/Hero'
import ArticleCard from './Container/ArticleCard'

const Home = () => {
  return (
    <MainLayout>
      <Hero />
      <ArticleCard />
    </MainLayout>
  )
}

export default Home