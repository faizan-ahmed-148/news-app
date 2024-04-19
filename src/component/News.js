import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";



const News = (props) => {




    
    const [articles, setArticles] = useState([])
    const [loading, setloading] = useState(true)
    const [page, setpage] = useState(0)
    const [totalResults, settotalReasults] = useState(1)

    const capatalize = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);

    }
        document.title = `${capatalize(props.category)} - NewsMonkey`

    
    const updateNews = async () => {
       
        console.log("cdm");
        
        setloading(true);
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=2baa1850909f46018bae03ef33d84eb7&page=1&pageSize=${props.pageSize}`;
        let data = await fetch(url);
        props.setProgress(30);
        let parsedData = await data.json();
        console.log(parsedData);
        props.setProgress(50);
        setArticles(parsedData.articles);
        setloading(false);
        settotalReasults(parsedData.totalResults)
        props.setProgress(100);
        
        
    }


    useEffect(() => {
        updateNews();
    }, [])


    const fetchMoreData = async () => {
        
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=2baa1850909f46018bae03ef33d84eb7&page=${page+1}&pageSize=${props.pageSize}`;
        setpage(page+1) 
        let data = await fetch(url);
        let parsedData = await data.json()
        setArticles(articles.concat(parsedData.articles))
        settotalReasults(parsedData.totalResults)
        
    };



    // const HandleNextClick = async () => {
    //     setpage(page + 1)
    //     updateNews();
    // }


    // const HandlePrevClick = async () => {
    //     setpage(page - 1)
    //     updateNews();

    // }

   
    return (
        <>
        <h1 className='text-center'>News-Monkey  Top Headlines</h1>
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Spinner />}
            
>
                {loading && <Spinner />}
                <div className="container">
                    <div className="row">
                        {articles.map((element) => {
                            return <div className="col-md-4 my-2" key={element.url}>
                                <NewsItem title={element.title ? element.title: ""} discription={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} publishedAt={element.publishedAt} />
                            </div>

                        })}
                    </div>
                </div>
            </InfiniteScroll>
            {/* <div className="container d-flex justify-content-between">
                    <button type="button" disabled={page <= 1} class="btn btn-dark" onClick={HandlePrevClick}> &larr; Previous</button>
                    <button type="button" disabled={page + 1 > Math.ceil(state.totalResults / props.pageSize)} class="btn btn-dark" onClick={this.HandleNextClick}>Next &rarr;</button>
                </div> */}
        </>
    )
}

News.defaultProps = {
    country: "in",
    pageSize: 8,
    category: "general"
}
// News.PropTypes = {
//     country: PropTypes.string,
//     pageSize: PropTypes.number,
//     category: PropTypes.string,
// }
export default News