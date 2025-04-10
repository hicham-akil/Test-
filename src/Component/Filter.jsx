import React, { useState } from "react";

const Filter = ({ countries, setFilteredCountries }) => {
  const [continent, setContinent] = useState("");

  const uniqueContinents = [...new Set(countries.map((c) => c.continents).flat())];

  const handleFilterChange = (e) => {
    const selectedContinent = e.target.value;
    setContinent(selectedContinent);
    setFilteredCountries(countries.filter((c) => c.continents.includes(selectedContinent)));
  };

  return (
    <div className="dark:bg-dark-blue dark:text-white">
      <div className="w-40 h-10 text-center dark:bg-dark-blue dark:text-white p-2 text-sm rounded  text-[var(--color-text-black)]  absolute top-40 right-62">
        <select
          onChange={handleFilterChange}
          className="dark:bg-dark-blue dark:text-white text-[var(--color-text-black)] text-sm"
          defaultValue=""
        >
          <option value="" disabled>
            Select a continent
          </option>
          {uniqueContinents.map((cont, index) => (
            <option key={index} value={cont}>
              {cont}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Filter;
