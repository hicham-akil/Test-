import React from 'react';
import { useLocation } from 'react-router-dom';

const Country = () => {
  const location = useLocation();
  const { country } = location.state;
  console.log(country);

  return (
    <div className='bg-[var(--color-custom-dark-blue)]'>
       <div className="bg-[var(--color-custom-dark-blue)] absolute top-40 left-15 w-20 h-7 flex flex-row items-center justify-center p-2 rounded-md">
  <button 
    onClick={() => window.history.back()} 
    className="flex items-center space-x-2 w-30 h-10 text-white py-1 bg-[var(--color-custom-blue)] px-3 rounded-md  transition"
  >
    <span className="text-sm">{'<-'}</span>
    <p className="text-sm ">Back</p>
  </button>
</div>

    <div className=' text-white min-h-screen flex flex-row flex-wrap gap-2 gap-x-100 '>
   
      <img src={country.flags?.png} alt={country.flags?.alt} className='w-150 h-90 relative left-15 top-60' />
      <div className='relative top-60'>
        <h1 className='text-3xl ml-2 mb-2'>{country.name.common}</h1>
        <div className=' flex  flex-wrap gap-2 space-x-50'>
        <div className="flex flex-col gap-4">
  <div className="flex flex-row">
    <span className="font-bold  mr-2">Native Name:</span>
    <span>{country.name.nativeName?.ara?.common || "N/A"}</span>
  </div>
  <div className="flex flex-row">
    <span className="font-bold mr-2">Population:</span>
    <span>{country.population.toLocaleString()}</span>
  </div>
  <div className="flex flex-row">
    <span className="font-bold mr-2">Region:</span>
    <span>{country.region}</span>
  </div>
  <div className="flex flex-row">
    <span className="font-bold mr-2">Sub Region:</span>
    <span>{country.subregion}</span>
  </div>
  <div className="flex flex-row">
    <span className="font-bold mr-2">Capital:</span>
    <span>{country.capital?.[0] || "N/A"}</span>
  </div>
</div>
          <div className='mt-10'>
            <div>
              <span>Top Level Domain: </span>
              <span>{country.tld.join(", ")}</span>
            </div>
            <div>
              <span>Currency: </span>
              <span>
                {country.currencies
                  ? `${Object.values(country.currencies)[0]?.name} (${
                    Object.values(country.currencies)[0]?.symbol
                  })`
                  : "N/A"}
              </span>
            </div>
            <div>
              <span>Languages: </span>
              <span>{Object.values(country.languages).join(", ") || "N/A"}</span>
            </div>
          </div>
        </div>

        {country.borders && (
          <div className="flex flex-row flex-wrap gap-2 mt-2">
            <h3>Border Countries:</h3>
          <div>
              {country.borders.map((border) => (
                <span key={border} className='inline-block mr-5 ml-5 bg-[var(--color-custom-blue)] text-center text-sm rounded w-20 h-5'>{border}</span>
              ))}
            </div>
          </div>
        )}
      </div>
        </div>
    </div>
  );
};

export default Country;
