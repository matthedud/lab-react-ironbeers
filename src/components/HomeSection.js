import React from "react"
import { useNavigate } from 'react-router-dom'
import "./HomeSection.css"

const HomeSection = props => {
    const navigate = useNavigate()

  return (
    <section onClick={()=>{ navigate(props.link)}} className="home-section">
      <picture>
        <img src={props.image} alt="picture" />
      </picture>
      <h1>{props.title}</h1>
      <p>
        {props.description ||
          `Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Esse quam laudantium et eaque odio neque ullam consequuntur
          voluptatum velit sint libero mollitia, adipisci deleniti iure rem quasi
          aliquid repellat totam.`}
      </p>
    </section>
  )
}

export default HomeSection
