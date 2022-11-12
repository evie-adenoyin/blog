import React from 'react'
import Hero from '../components/hero'
import NewsList from '../components/newslist'
import HeaderPage from '../components/headerpage'
import NewsAd from '../components/newsad';
const News = ({data}) => {
  console.log("getStaticProps data :", data);
  return (
  <div>
      <HeaderPage />
      <NewsList header = "Latest news" data = {data}/>
      <NewsAd />
      <NewsList header = "You May Also Like" data = {data}/> 
  </div>  
  )
}

const NewsApiEndPoint = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
    const data = await res.json()
    return data
}

export async function getStaticProps(){
  const data = await NewsApiEndPoint()
  return {
      props: {data}
  }
}
export default News