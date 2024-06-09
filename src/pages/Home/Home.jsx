import React from 'react'
import MainLayout from '../../components/MainLayout'
import Hero from './Container/Hero'
import { Helmet } from 'react-helmet'
import ArticleCard from './Container/ArticleCard'
import CTA from './Container/CTA'

const Home = () => {
  return (
    <MainLayout>
      <Hero />
      <ArticleCard />
    </MainLayout>
  )
}

export default Home