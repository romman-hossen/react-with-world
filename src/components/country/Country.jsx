import React, { useState } from 'react';
import './Country.css'

const country = ({country,handleVisitedCountries}) => {
    // console.log(handleVisitedCountries)
    // console.log(country.area.area)
    // console.log(country.population.population)
    const  [visited, setVisited] = useState(false);
    const handleVisited = () => {
        // console.log("Clicked")
        // if(visited){
        //     setVisited(false)
        // }
        // else{
        //     setVisited(true)
        // }
        // way 2
        // {visited ? setVisited(false):setVisited(true) }
        // setVisited(visited ? false : true)

        // way 3
        setVisited(!visited);
        handleVisitedCountries(country);
       
    }
    return (
                <div className={`country ${visited && 'visited-country'}`}>
                    <img src={country.flags?.flags?.png} alt={country.flags.flags.alt} width= "100%" />
                    <h1>Name : {country.name.common}</h1> 
                    <p>Population : {country.population.population} people</p>
                    <p>Area : {country.area.area} {}km² {country.area.area > 300000 ?"Big Country" :country.area.area > 150000 ?"medium Country": "Small Country"}</p> 
                    <button onClick={handleVisited}>
                            {/* onClick={() => {
                        handleVisited();
                        handleVisitedCountries();}} */}
                        {visited?"Visited":"Not Visited"} </button>    
                </div>
    );      
};

export default country;