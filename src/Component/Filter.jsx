import React from 'react'

const Filter = ({countries}) => {
 
    if (!countries || countries.length === 0) {
        return <p>Loading countries...</p>;
      }
  return (
    <div>
        <select name="" id="">
            {countries.map((counterie,index)=>(
                <option key={index}>{counterie.continents}</option>
            ))}
        </select>
    </div>
  )
}

export default Filter