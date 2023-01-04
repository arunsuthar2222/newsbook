import React,{ useState, useEffect } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import InfiniteScroll from 'react-infinite-scroll-component';
import ImageSlidder from './ImageSlidder';
import Footer from './Footer'

function News({ category }) {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(false)
  const [totalResults, setTotalResults] = useState(0);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(20) 

 const capitalizeFirstLetter =(string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
const updateNews = async () =>{
  setLoading(true)
  const url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=76b5835a92e44b07a52d0f87aa4d2453&page=${page}&pageSize=${pageSize}`
  const response = await fetch(url)
  const responseData = await response.json();
  setArticles(responseData.articles)
  setTotalResults(responseData.totalResults)
  setLoading(false)
  
} 

  useEffect(() => {
updateNews()
  }, []);

const fetchMoreData = async () =>{
  const url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=76b5835a92e44b07a52d0f87aa4d2453&page=${page + 1}&pageSize=${pageSize}`
  setPage(page + 1);
  const response = await fetch(url)
  const responseData = await response.json();
  setArticles(articles.concat(responseData.articles))

}

  return (
    <div className='w-full'>
      {loading && <Spinner />}
      {!loading && <>
      {articles && <ImageSlidder articles={articles}/>}
      <h2 className='poppins text-[#222] text-3xl lg:text-4xl text-center pt-7'>Top  {capitalizeFirstLetter(category)}  Headlines</h2>
      <div className='hidden md:block border-b-purple-600 border-b-[3px] w-[200px] mx-auto pt-1.5'></div>
      <div className='mt-7'>
      <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={totalResults > articles.length}
          loader={<Spinner />}
        >
          <div className='grid grid-cols-1 gap-8 lg:grid-cols-2 px-5 pt-3'>
        {articles.map((article) => (
        <NewsItem key={article.url} description={article.description ? article.description : ""} title={article.title ? article.title : ""} urlToImage={article.urlToImage && article.urlToImage} author={article.author ? article.author : "By Unknown"} publishedAt={article.publishedAt} url={article.url}/>
))}    
      
</div>
 </InfiniteScroll>
 </div>
 <Footer />
 </>}
 
      </div>
    
  )
}

export default News