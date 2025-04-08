import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Page1 = () => {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const fetchCountries = async () => {
    try {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const data = await response.json();
      setCountries(data);
      console.log(data[0]);
    } catch (e) {
      setError("Error fetching country data");
      console.log(e);
    }
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  if (error) {
    return <p>{error}</p>;
  }

  if (!countries.length) {
    return <p>Loading...</p>;
  }

  return (
    <main>
      <div className="bg-[var(--color-custom-dark-bleu)] ">
        
      <div className="flex flex-row flex-wrap gap-4">
          {countries.map((country) => (
            <div
            key={country.cca3}
            onClick={() => navigate(`/country/${country.cca3}`,{state:{country}})}
            className="w-90 mt-10 h-90 flex rounded-xl bg-[var(--color-custom-blue)] ml-15 "
            >
              <div className="">
                <img
                  src={country.flags.png}
                  alt={country.flags.alt}
                  className="w-120 h-35"
                  
                  />
              <div className="ml-8 mt-7">
  <h1 className="text-white mb-2">
    <span className="font-bold">Country: </span>{country.name.common}
  </h1>
  <p className="text-white">
    <span className="font-bold">Region: </span>{country.region}
  </p>
  <p className="text-white">
    <span className="font-bold">Capital: </span>{country.capital}
  </p>
  <p className="text-white">
    <span className="font-bold">Population: </span>{country.population}
  </p>
</div>
            </div>
            </div>
          ))}
      </div>
          </div>
    </main>
  );
};

export default Page1;
