
import React from 'react'
import NewsDetail from '../../components/newsdetail'

 const NewsSinglePost = ({data}) => {
  return (
    <NewsDetail data = {data}/>
  )
}

export default NewsSinglePost




export async function getStaticPaths() {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    const news = await res.json()
    
    const paths = news.map((data) => ({
        params: { id: data.id.toString() },
    }))
   
    return { paths, fallback: false }
  }
  export async function getStaticProps({ params }) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    const data = await res.json()
    return {
        props:{data}
    }
  }
  
 