import React from 'react'
import { useLocation } from 'react-router-dom'

const Country = () => {
    const location=useLocation();
    const {country}=location.state
    console.log(country)

  return (
    <div>
         <div>
                <img
                  src={country.flags.png}
                  alt={country.flags.alt}
                />
                <h3>{country.name.common}</h3>
                <p>{country.region}</p>
                <p>{country.capital}</p>
                <p>{country.population}</p>
              </div>
    </div>
  )
}

export default Country