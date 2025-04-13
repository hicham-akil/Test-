import React, { useState } from "react";

const Filter = ({ countries, setFilteredCountries }) => {
  const [continent, setContinent] = useState("");

  const uniqueContinents = [...new Set(countries.map((c) => c.continents).flat())];

  const handleFilterChange = (e) => {
    const selectedContinent = e.target.value;
    setContinent(selectedContinent);
    setFilteredCountries(
      countries.filter((c) => c.continents.includes(selectedContinent))
    );
  };

  return (
    <div className="bg-[--color-white] text-[--color-very-dark-blue] dark:bg-[--color-dark-blue] dark:text-[--color-white]">
      <div className="w-full sm:w-52 md:w-64 lg:w-80 h-12 p-2 text-sm rounded mt-4 sm:mt-10 lg:absolute lg:top-25 lg:right-42">
        <select
          onChange={handleFilterChange}
          className="w-full h-full rounded px-3 bg-[--color-white] text-[--color-very-dark-blue] dark:bg-[--color-dark-blue] dark:text-[--color-white] border border-[--color-dark-gray] focus:outline-none"
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
