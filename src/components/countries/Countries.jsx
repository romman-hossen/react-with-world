import React, { use } from "react";
import Country from "../country/Country";
import "./Countries.css";

const Countries = ({ contriesPromise }) => {
  const countriesData = use(contriesPromise);
  const countries = countriesData.countries;
  // console.log(countries)
  return (
    <div>
      <h1>React on the go ... : {countries.length}</h1>
      <div id="countries">
        {countries.map((country) => (
          <Country country={country} key={country.ccn3.ccn3}></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
