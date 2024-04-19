import React from 'react'

const NewsItem =(props)=>{


    let { title, discription, imageUrl, newsUrl, author, publishedAt} = props;
    return (
      <div>
        <div className="card" style={{ width: "18rem" }}>
          <img src={!imageUrl?"https://image.cnbcfm.com/api/v1/image/107138244-2024-Sierra-EV-Denali-Edition-1-03.jpg?v=1666302235&w=630&h=354&ffmt=webp":imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{discription}</p>
            <p className="card-text"><small class="text-muted">{author} : {publishedAt}</small></p>
            <a href={newsUrl} target="__blank" className="btn btn-sm btn-dark">Readmore</a>
          </div>
        </div>
      </div>
    )
  
}
export default NewsItem