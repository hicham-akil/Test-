import React from "react";
import { useLocation } from "react-router-dom";

const Country = () => {
  const location = useLocation();
  const { country } = location.state;

  return (
    <main className="p-4 pt-14 bg-very-light-gray lg:h-[90.1vh] dark:text-white dark:bg-very-darkmode-blue">
      <div className="container mx-auto px-4">
        <button
          className="flex items-center gap-5 py-3 px-6 shadow-lg shadow-dark-gray
            text-very-dark-blue rounded text-white cursor-pointer
            dark:bg-dark-blue dark:shadow-very-darkmode-blue "
          onClick={() => window.location.href='/'}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="size-5"
          >
            <path
              fillRule="evenodd"
              d="M18 10a.75.75 0 0 1-.75.75H4.66l2.1 1.95a.75.75 0 1 1-1.02 1.1l-3.5-3.25a.75.75 0 0 1 0-1.1l3.5-3.25a.75.75 0 1 1 1.02 1.1l-2.1 1.95h12.59A.75.75 0 0 1 18 10Z"
              clipRule="evenodd"
            />
          </svg>
          Back
        </button>

        <div className="mt-20 flex flex-col lg:flex-row lg:justify-between lg:gap-10 lg:items-center">
          <img
            src={country.flags?.png}
            alt={country.flags?.alt}
            className="lg:max-w-[600px] lg:max-h-[60vh] xl:max-w-[700px] xl:w-full lg:h-fit"
          />

          <div>
            <h3 className="font-extrabold text-4xl mt-10">
              {country.name.common}
            </h3>

            <div className="flex flex-col lg:flex-row lg:gap-16 lg:items-start lg:justify-start">
              <div className="flex flex-col gap-0 mt-5">
                <div className="flex gap-2 mt-4">
                  <span className="font-bold">Native Name:</span>
                  <span className="font-light">
                    {country.name.nativeName?.ara?.common || "N/A"}
                  </span>
                </div>
                <div className="flex gap-2 mt-1">
                  <span className="font-bold">Population:</span>
                  <span className="font-light">
                    {country.population.toLocaleString()}
                  </span>
                </div>
                <div className="flex gap-2 mt-1">
                  <span className="font-bold">Region:</span>
                  <span className="font-light">{country.region}</span>
                </div>
                <div className="flex gap-2 mt-1">
                  <span className="font-bold">Sub Region:</span>
                  <span className="font-light">{country.subregion}</span>
                </div>
                <div className="flex gap-2 mt-1">
                  <span className="font-bold">Capital:</span>
                  <span className="font-light">
                    {country.capital?.[0] || "N/A"}
                  </span>
                </div>
              </div>

              <div className="mt-4">
                <div className="flex gap-2 mt-5">
                  <span className="font-bold">Top Level Domain:</span>
                  <span className="font-light">{country.tld.join(", ")}</span>
                </div>
                <div className="flex gap-2 mt-1">
                  <span className="font-bold">Currency:</span>
                  <span className="font-light">
                    {country.currencies
                      ? `${Object.values(country.currencies)[0]?.name} (${
                          Object.values(country.currencies)[0]?.symbol
                        })`
                      : "N/A"}
                  </span>
                </div>
                <div className="flex gap-2 mt-1">
                  <span className="font-bold">Languages:</span>
                  <span className="font-light">
                    {Object.values(country.languages).join(", ") || "N/A"}
                  </span>
                </div>
              </div>
            </div>

            {country.borders && (
              <div className="mt-10 flex flex-col lg:flex-row lg:items-center gap-5">
                <h3 className="font-semibold text-xl lg:text-base">
                  Border Countries:
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
                  {country.borders.map((border) => (
                    <span
                      key={border}
                      className="shadow flex items-center justify-center dark:bg-dark-blue
                       shadow-dark-gray dark:shadow-dark-blue py-4 px-6 rounded lg:py-2 lg:px-4"
                    >
                      {border}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Country;
