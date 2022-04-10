import React from 'react'
import beers from '../assets/beers.png'
import newBeer from '../assets/new-beer.png'
import randomBeer from '../assets/random-beer.png'
import HomeSection from '../components/HomeSection'

const Home = () => {

  return (
    <>
      <HomeSection image={beers} title={"All Beers"} link ='all-beers'/>
      <HomeSection image={newBeer} title={"Random Beer"} link ='random-beers'/>
      <HomeSection image={randomBeer} title={"New Beer"} link ='new-beers'/>
    </>
  )
}

export default Home