import React, { useState } from 'react'

const Recherche = ({setFilteredCountries,countries}) => {
      const [value, setvalue]= useState('');
      const recherchefunction=(e)=>{
        e.preventDefault();
        const data=countries?.find((elm)=>elm.name.common.toLowerCase()===value.toLowerCase())
        setFilteredCountries(data)
        console.log(data)
      }
    
  return (
    <div className='dark:bg-dark-blue dark:text-white '>
        <div className='dark:bg-dark-blue dark:text-white rounded-sm w-110 h-12 absolute top-40  left-30 '>
            
        <form action="" className='flex space-bettwen mt-2 ' onSubmit={(e)=>recherchefunction(e)}>

        <span className='mr-5 ml-5'>🔍 </span>
        <input type="text" value={value} className='text-sm' placeholder='Search for a country..'  onChange={(e)=>setvalue(e.target.value)} />
        </form>
        </div>
    </div>
  )
}

export default Recherche