import React, { useEffect } from "react";
import Filter from "./Filter";
import { useNavigate } from "react-router-dom";

const Page1 = ({ datatoshow }) => {
  const navigate = useNavigate();
  const dataArray = Array.isArray(datatoshow) ? datatoshow : [datatoshow];
  
  useEffect(() => {
    if (dataArray.length === 1) {
      navigate(`/country/${dataArray[0].cca3}`, { state: { country: dataArray[0] } });
    }
  }, [dataArray, navigate]);

  return (
    <main>
      <div className="dark:bg-dark-blue dark:text-white ">
        <div className="flex flex-row flex-wrap gap-4">
          {dataArray?.map((country) => (
            <div
              key={country.cca3}
              onClick={() => navigate(`/country/${country.cca3}`, { state: { country } })}
              className="w-70 mt-50 h-100 flex rounded-xl dark:bg-dark-blue dark:text-white ml-30 cursor-pointer"
            >
              <div>
                <img
                  src={country.flags?.png}
                  alt={country.flags?.alt || "Country Flag"}
                  className="w-120 h-35"
                />
                <div className="ml-8 mt-7">
                  <h1 className="mb-2 dark:bg-dark-blue dark:text-white">
                    <span className="font-bold">Country: </span>{country.name?.common}
                  </h1>
                  <p className="dark:bg-dark-blue dark:text-white">
                    <span className="font-bold">Region: </span>{country.region}
                  </p>
                  <p className="dark:bg-dark-blue dark:text-white">
                    <span className="font-bold">Capital: </span>{country.capital?.[0] || "N/A"}
                  </p>
                  <p className="dark:bg-dark-blue dark:text-white">
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
