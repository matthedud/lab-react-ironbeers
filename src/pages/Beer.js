import React, { useEffect, useState } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"
import BeerDetail from "../components/BeerDetail"

const Beer = () => {
  const [beer, setBeer] = useState([])
  const {id} = useParams()

  useEffect(() => {
    const fetchBeer = async () => {
        const beerGot = await axios.get('https://ih-beers-api2.herokuapp.com/beers/'+id)
        console.log({beerGot});
        setBeer(beerGot.data)
    }
    fetchBeer()
  }, [])

  return <BeerDetail beer={beer} />
}

export default Beer
