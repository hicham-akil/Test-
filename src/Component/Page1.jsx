import axios from 'axios';
import React, {  useEffect, useState } from 'react'
import Filter from './Filter';


const Page1 = () => {
  const [countries,setconteries]=useState([]);
 
    

    const fetchdata= async ()=>{
      try{
        const response=await axios.get("https://restcountries.com/v3.1/all");
    
          setconteries(response.data);
        
    
    }catch(e){
      console.log(e)
    }
  }
  useEffect(() => {
    fetchdata()
  }, []);


  useEffect(() => {
    console.log(countries);
  }, [countries]);
  return (
    <div className='container bg-[var(--color-custom-dark-blue)]'>
   <Filter countries={countries} />

{countries.map((counterie,index)=>(
  < div key={index}>
  <h1>{counterie.continents}</h1>
  </div>
))}        

    </div>
  )
}

export default Page1