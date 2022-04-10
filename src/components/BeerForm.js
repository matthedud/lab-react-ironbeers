import React, { useState } from 'react'
import axios from 'axios'
import './BeerForm.css'


const BeerForm = props => {
    const [beerForm, setBeerForm] = useState({})

    const changeHandler = (event)=>{
        const {value, name} = event
        setBeerForm({...beerForm, [name]:value})
    }

    const submit = async (event)=>{
        event.preventDefault()
        const result = await axios.post( "https://ih-beers-api2.herokuapp.com/beers/new",beerForm)
        console.log({result});
    }

    return (
        <form>
            <label htmlFor='name' >Name</label>
            <input type="text" name='name' id="name" onChange={changeHandler} value={beerForm.name} />
            <label htmlFor='tagLine' >tag line</label>
            <input type="text" name='tagLine' id="tagLine" onChange={changeHandler} value={beerForm.tagLine} />
            <label htmlFor='description' >Description</label>
            <textarea type="text" name='description' id="description" onChange={changeHandler} value={beerForm.description}/>
            <label htmlFor='firstBrewed' >First Brewed</label>
            <input type="text" name='firstBrewed' id="firstBrewed" onChange={changeHandler} value={beerForm.firstBrewed}/>
            <label htmlFor='brewerTips'>Brewer Tips</label>
            <input type="text" name='brewerTips' id="brewerTips" onChange={changeHandler} value={beerForm.brewerTips}/>
            <label htmlFor='attenuation' >Attenuation</label>
            <input type="number" name='attenuation' id="attenuation" onChange={changeHandler} value={beerForm.attenuation}/>
            <label htmlFor='contributed' >Contributed</label>
            <input type="text" name='contributed' id="contributed" onChange={changeHandler} value={beerForm.contributed}/>
            <button onClick={submit} >Add New</button>
        </form>
    )
    }

export default BeerForm