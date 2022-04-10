import React, { useEffect, useState } from "react"
import axios from "axios"
import BeerDetail from "../components/BeerDetail"

const RandomBeer = () => {
  const [beer, setBeer] = useState([])

  useEffect(() => {
    const fetchBeer = async () => {
        const beerGot = await axios.get('https://ih-beers-api2.herokuapp.com/beers/random')
        console.log({beerGot});
        setBeer(beerGot.data)
    }
    fetchBeer()
  }, [])

  return <BeerDetail beer={beer} />
}

export default RandomBeer
