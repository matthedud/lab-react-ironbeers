import React from "react"
import "./BeerDetail.css"

const BeerDetail = ({ beer }) => {
  if (!beer) return null
  return (
    <div className="beer-detail">
      <picture>
        <img src={beer.image_url} alt="" />
        <div className="beer-detail-line">
          <h1>{beer.name}</h1>
          <p className="attenuation_level">{beer.attenuation_level}</p>
        </div>
        <div className="beer-detail-line">
          <div className="tagline">{beer.tagline}</div>
          <p className="first_brewed">{beer.first_brewed}</p>
        </div>
        <p className="description">{beer.description}</p>
        <p className="contributed">{beer.contributed_by}</p>
      </picture>
    </div>
  )
}

export default BeerDetail
