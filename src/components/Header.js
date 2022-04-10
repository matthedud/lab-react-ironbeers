import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import homeImage from '../assets/img_296485.png'
import './Header.css'

const Header = () => {
  return (<>
    <nav className='home-nav'>
     <Link to='/'> <img src={homeImage} alt='home'/></Link>
    </nav>
    <main>
      <Outlet/>
    </main>
  </>

  )
}

export default Header