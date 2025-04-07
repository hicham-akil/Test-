import axios from 'axios';
import React, {  use, useEffect, useState } from 'react'
import Filter from './Filter';


const Page1 = ({continent}) => {
  const [countries,setconteries]=useState([]);
  const [resultfilter,setresultfilter]=useState([]);
 
    

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
  const filterfunction=()=>{
    const resultfil=countries.filter((elm)=>elm.continents.lowercase()===continent)
    setresultfilter(resultfil)
  }
  
  useEffect(() => {
   
    filterfunction()
  }, [continent]);
  useEffect(() =>{
    console.log(countries);
  }, [countries]);
  return (
    <div className='container bg-[var(--color-custom-dark-blue)]'>
   <Filter countries={countries} />

{/* {countries.map((counterie,index)=>(
  < div key={index}>
  <h1>{counterie.continents}</h1>
  </div>
))}         */}
{resultfilter.map((elm,index)=>(
  < div key={index}>
  <h1>{elm}</h1>
  </div>
))}        

    </div>
  )
}

export default Page1