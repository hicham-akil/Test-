import React from "react";

import Filter from "./Filter";
import { useNavigate } from "react-router-dom";

const Page1 = ({datatoshow}) => {
  const navigate = useNavigate();

  

  return (
    <main>
    <div className="bg-[var(--color-custom-dark-bleu)] ">
      <div className="flex flex-row flex-wrap gap-4">
        {datatoshow?.map((country) => (
          <div
            key={country.cca3}
            onClick={() => navigate(`/country/${country.cca3}`, { state: { country } })}
            className="w-90 mt-50 h-90 flex rounded-xl bg-[var(--color-custom-blue)] ml-15 cursor-pointer"
          >
            <div>
              <img
                src={country.flags?.png}
                alt={country.flags?.alt || "Country Flag"}
                className="w-120 h-35"
              />
              <div className="ml-8 mt-7">
                <h1 className="text-white mb-2">
                  <span className="font-bold">Country: </span>{country.name?.common}
                </h1>
                <p className="text-white">
                  <span className="font-bold">Region: </span>{country.region}
                </p>
                <p className="text-white">
                  <span className="font-bold">Capital: </span>{country.capital?.[0] || "N/A"}
                </p>
                <p className="text-white">
                  <span className="font-bold">Population: </span>{country.population.toLocaleString()}
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
