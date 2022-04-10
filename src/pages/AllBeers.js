import React, { useEffect, useState } from "react"
import axios from "axios"
import BeerList from "../components/BeerList"

const AllBeers = () => {
  const [beers, setBeers] = useState([])

  useEffect(() => {
    const fetchBeers = async () => {
        const beerList = await axios.get('https://ih-beers-api2.herokuapp.com/beers')
        setBeers(beerList.data)
    }
    fetchBeers()
  }, [])

  return <BeerList beers={beers} />
}

export default AllBeers
