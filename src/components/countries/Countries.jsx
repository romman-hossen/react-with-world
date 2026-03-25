import React, { use, useState } from "react";
import Country from "../country/Country";
import "./Countries.css";
import country from "../country/Country";

const Countries = ({ contriesPromise }) => {
  const [visitedCountries,setVisitedCountries] = useState([]);
  
  const handleVisitedCountries = (country) =>{
    console.log("visited country done",country)
    // setVisitedCountries()
     const newVisitedCountries = [...visitedCountries,country ]
     setVisitedCountries(newVisitedCountries)
  }
  const countriesData = use(contriesPromise);
  const countries = countriesData.countries;
 
  // console.log(countries)
  return (
    <div>

      <h1>In the Countries ... : {countries.length}</h1>
      <h3>Total Country Visited: {visitedCountries.length}</h3>
      <ol>
        {visitedCountries.map(country => <li key={country.ccn3.ccn3} country = {country}>{country.name.common}</li>)}
      </ol>
      <div id="countries">
        {countries.map((country) => (
          <Country country={country}
           key={country.ccn3.ccn3}
           handleVisitedCountries ={handleVisitedCountries}
           >
          </Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
