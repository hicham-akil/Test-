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
    <div className=" mx-auto mt-14  dark:bg-very-darkmode-blue">
      <ul className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {dataArray
          .filter((country) => country.name.common.toLowerCase() !== "israel") // Fuckkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk Israel
          .map((country) => (
            <li
onClick={() => navigate(`/country/${country.cca3}`, { state: { country } })}

              key={country.name.common}
              className=" dark:bg-very-darkmode-blue lg:h-[380px] rounded-md shadow overflow-hidden dark:bg-dark-blue"
            >
              <img
                src={country.flags.png}
                alt="country"
                loading="lazy"
                className="w-full md:h-full md:max-h-[212px] lg:max-h-[182px] xl:max-h-[210px] cursor-pointer"
                onClick={() => navigate(`/${country.name.common}`)}
              />
              <div className="px-5 py-7">
                <h2 className="text-xl font-bold mb-4">
                  {country.name.common}
                </h2>
                <div className="flex gap-1 items-center">
                  <span className="font-bold text-sm">Population:</span>
                  <span>{country.population.toLocaleString()}</span>
                </div>
                <div className="flex gap-1 items-center">
                  <span className="font-bold text-sm">Region:</span>
                  <span>{country.region}</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="font-bold text-sm">Capital:</span>
                  <span>{country.capital}</span>
                </div>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Page1;
