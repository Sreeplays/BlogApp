import React from 'react'
import Header from './Header'
import Footer from './Footer'
import CTA from '../pages/Home/Container/CTA'

const MainLayout = ({children}) => {
  return (
    <div>
        <Header/>
        {children}
        <CTA/>
    </div>
  )
}

export default MainLayout