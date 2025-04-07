import React, { useState } from 'react'
import Page1 from './Page1'

const Filter = ({countries}) => {
    const [continent,setcontinent]=useState('')
 
    if (!countries || countries.length === 0) {
        return <p>Loading countries...</p>;
      }
      const handlechange=(continent)=>{
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
        <Page1 continent={continent}/> 
        )}
    </div>
  )
}

export default Filter