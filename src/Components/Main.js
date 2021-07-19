import { useState,useEffect } from "react"
import React from 'react'
function Main(){
    const [articles,setArticles]=useState([])
    const [search,setSearch]=useState("")
    useEffect(()=>{
       let url=`https://newsapi.org/v2/everything?q=microsoft&apiKey=1d5bfe7040154054829773c26af91514`

       fetch(url)
       .then((Response)=>Response.json())
       .then((news)=>{
           setArticles(news.articles)
       })
    },[])
    function readValue(value){
        setSearch(value);
    }
    function searchNews(){
        let url=`https://newsapi.org/v2/everything?q=${search}&apiKey=1d5bfe7040154054829773c26af91514`

       fetch(url)
       .then((Response)=>Response.json())
       .then((news)=>{
           setArticles(news.articles)
       })
    }

    return (
        <div className="container">
           <div className="padd">
               <div className="filter">
                   <input type="search" onChange={(event)=>{readValue(event.target.value)}} placeholder="Enter a topic to search"/>
                   <button className="btn" onClick={searchNews}>Search For News</button>
               </div>
               <h1>All News</h1>
               {
                   articles.length===0?(<h2>No Data Found</h2>):
                   articles.map((article,index)=>(
                       <div key={index} className="article">
                           <div className="padd-article">
                               <div className="news-img">
                                   <img src={article.urlToImage} alt=""/>
                               </div>
                               <div className="news-detail">
                                   <h2>{article.title}</h2>
                                   <p>{article.author}</p>
                                   <p>{article.description}</p>
                                   <p>
                                       <a href={article.url} target="blank">
                                       <button className="btn">Read full article</button>
                                       </a>
                                   </p>
                               </div>

                           </div>

                       </div>

                   )
                   )
               }
           </div> 
        </div>
    )
}
export default Main