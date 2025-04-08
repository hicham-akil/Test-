import React, { useEffect, useState } from 'react'
import Page1 from './Page1'
import ShowResultF from './ShowResultF'

const Filter = ({countries}) => {
    const [continent,setcontinent]=useState('')
    const [Scountries,setcountries]=useState(countries)
    useEffect(()=>{
        setcountries(countries)
    },[countries])
    

      const handlechange=(continent)=>{
        // console.log(continent)
           setcontinent(continent)
      }
  return (
    <div>
        <select name="" onChange={(e)=>handlechange(e.target.value)} id="">
            {countries.map((counterie,index)=>(
                <option value={counterie.continents} key={index}>{counterie.continents}</option>
            ))}
        </select>
        {continent&&(
        <ShowResultF continent={continent} countries={countries}/> 
        )}
    </div>
  )
}

export default Filter