import React, { useEffect, useState } from "react";
import Filter from "./Filter";
import Page1 from "./Page1";
import Recherche from "./Recherche";

const CountriesApp = () => {
  const [countries, setCountries] = useState([]);
  const [recherche, setrecherche]= useState([]);
  const [error, setError] = useState(null);
  const [filteredCountries, setFilteredCountries] = useState([]);

  const fetchCountries = async () => {
    try {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const data = await response.json();
      setCountries(data);
      setFilteredCountries(data);
    } catch (e) {
      setError("Error fetching country data");
      console.log(e);
    }
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  if (error) return <p>{error}</p>;
  if (!countries.length) return <p>Loading...</p>;


  return (
    <div className="text-very-dark-blue dark:text-white dark:bg-very-darkmode-blue">
      <main
        className="main p-4 bg-very-light-gray dark:bg-very-darkmode-blue"
        style={{ minHeight: "calc(100vh - 80px)" }}
      >
      <Filter countries={countries} setFilteredCountries={setFilteredCountries} />
      <Recherche  setFilteredCountries={setFilteredCountries} countries={countries}/>
      <Page1 datatoshow={filteredCountries} />
    </main>
    </div>
  );
};

export default CountriesApp;
