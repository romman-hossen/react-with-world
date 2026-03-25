import React, { use, useState } from "react";
import Country from "../country/Country";
import "./Countries.css";
// import country from "../country/Country";

const Countries = ({ contriesPromise }) => {
  const [visitedCountries,setVisitedCountries] = useState([]);
  const [visitedFlags,setVisitedFlags] = useState([])
  
  const handleVisitedCountries = (country) =>{
    console.log("visited country done",country)
    // setVisitedCountries()
     const newVisitedCountries = [...visitedCountries,country ]
     setVisitedCountries(newVisitedCountries)
  }
  const handleVisitedFlag = (flag) => {
    console.log('visited this flag',flag)
    const visitedFlag = [...visitedFlags,flag]
    setVisitedFlags(visitedFlag)
  }
  const countriesData = use(contriesPromise);
  const countries = countriesData.countries;
 
  // console.log(countries)
  return (
    <div>

      <h1>In the Countries ... : {countries.length}</h1>
      <h3>Total Country Visited: {visitedCountries.length}</h3>
      <h3>Total Flag Visited: {visitedFlags.length}</h3>
      <ol>
        {visitedCountries.map(country => <li key={country.ccn3.ccn3} country = {country}>{country.name.common}</li>)}
      </ol>
      <div>
        {visitedFlags.map(flag => <img className="visited-img" src={flag} alt="" /> )}  
      </div>     
      <div id="countries">
        {countries.map((country) => (
          <Country country={country}
           key={country.ccn3.ccn3}
           handleVisitedCountries ={handleVisitedCountries}
           handleVisitedFlag ={handleVisitedFlag}
           >
          </Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
