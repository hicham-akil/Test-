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
      <div>
        <h2>Countries List</h2>

        <div>
          {countries.map((country) => (
            <div
              key={country.cca3}
              onClick={() => navigate(`/country/${country.cca3}`,{state:{country}})}
            >
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
          ))}
        </div>
      </div>
    </main>
  );
};

export default Page1;
