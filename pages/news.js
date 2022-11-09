import React from 'react'
import Hero from '../components/hero'
import NewsList from '../components/newslist'
import HeaderPage from '../components/headerpage'
import NewsAd from '../components/newsad';
const News = () => {
  return (
  <div>
      <HeaderPage />
      <NewsList header = "Latest news"/>
      <NewsAd />
      <NewsList header = "You May Also Like"/> 
  </div>  
  )
}

export default News