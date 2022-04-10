import React from "react"
import { Link } from "react-router-dom"
import "./BeerList.css"

const BeerList = ({ beers }) => {
  return beers.map((beer) => {
    return (
      <div key={beer._id} className="beers-section">
        <picture>
          <img src={beer.image_url} alt="" />
        </picture>
        <div className="text-content">
          <Link to={`/all-beers/${beer._id}`}>
            <h2>{beer.name}</h2>
          </Link>
          <p className="tagline">{beer.tagline}</p>
          {/* <p className="creator"><strong>Created by : </strong>{beer.contributed_by}</p> */}
        </div>
      </div>
    )
  })
}

export default BeerList
