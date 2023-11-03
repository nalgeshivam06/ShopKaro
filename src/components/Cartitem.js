import React from 'react'

function Cartitem({ title, price, description, image_url }) {
  return (
    <div>
      <div className="card" style={{ width: "21rem", border: "1px solid" }}>
        <img src={image_url} className="card-img-top  img-thumbnail" alt="..."style={{height:"250px"}} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text para-container">{description}</p>
          <h3 style={{display:"inline"}}>${price}</h3>
          <a href="#" className="btn cart-btn btn-primary">Buy Now</a>
        </div>
      </div>
    </div>
  )
}

export default Cartitem
