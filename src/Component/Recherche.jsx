import React, { useState } from "react";

const Recherche = ({ setFilteredCountries, countries }) => {
  const [value, setValue] = useState("");

  const rechercheFunction = (e) => {
    e.preventDefault();
    const data = countries?.find(
      (elm) => elm.name.common.toLowerCase() === value.toLowerCase()
    );
    setFilteredCountries(data);
    console.log(data);
  };

  return (
    <div className="dark:bg-very-darkmode-blue dark:text-white">
      <div className="dark:text-white dark:bg-very-darkmode-blue rounded-sm w-full  sm:w-96 md:w-110 h-12 relative top-10 left-4 sm:left-35">
        <form
          action=""
          className="flex  items-center mt-2 space-x-3 w-full"
          onSubmit={(e) => rechercheFunction(e)}
        >
          <span className="mr-3 ml-3 ">🔍</span>
          <input
            type="text"
            value={value}
            className="text-sm w-full py-2 px-3 focus:outline-none dark:bg-dark-blue dark:text-white rounded-md"
            placeholder="Search for a country..."
            onChange={(e) => setValue(e.target.value)}
          />
        </form>
      </div>
    </div>
  );
};

export default Recherche;
