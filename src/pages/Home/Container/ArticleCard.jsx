import React from 'react'
import Articles from '../../../components/Articles'

const ArticleCard = () => {
  return (
    <div className='container mx-auto flex flex-wrap md:gap-x-5 gap-y-5 px-5 py-10'>
        <Articles />
    </div>
  )
}

export default ArticleCard