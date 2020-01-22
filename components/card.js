import React from 'react'

const CardComponent = ({ item }) => (
<div className="card" style={{ 
    width: "20rem",
    margin: 20 
    
    }}>
   <img  class="card-img-top" src={`https://image.tmdb.org/t/p/w185/${item.poster_path}`} alt="Card image cap" />
  <div className="card-body">
  <h5 className="card-title">{item.original_title}</h5>
    <p className="card-text">{String(item.overview).substr(0, 100)}...</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
)


export default CardComponent