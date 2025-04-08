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
      <div className="bg-[var(--color-custom-dark-bleu)] flex flex-wrap gap-4">
          {countries.map((country) => (
            <div
              key={country.cca3}
              onClick={() => navigate(`/country/${country.cca3}`,{state:{country}})}
              className="w-50 h-80 flex rounded-xl bg-[var(--color-custom-blue)] "
            >
              <div className="">
                <img
                  src={country.flags.png}
                  alt={country.flags.alt}
                  className="w-80 h-35"
                  
                />
              <div className=" ml-5 mt-5">
                <h1  className="text-white mb-2 ">{country.name.common}</h1>
                <p className="text-white">{country.region}</p>
                <p className="text-white">{country.capital}</p>
                <p className="text-white">{country.population}</p>
              </div>
            </div>
            </div>
          ))}
      </div>
    </main>
  );
};

export default Page1;
