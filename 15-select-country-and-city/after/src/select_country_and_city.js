import React from 'react';
import { useState } from 'react';
import { unique } from 'jquery';

const SelectCountry = (props) => {
  const { selectedCountry, setSelectedCountry, countries } = props;

  return (
    <select value={selectedCountry} onChange={(e) => setSelectedCountry(e.target.value)}>
      <option disabled selected value>Please select a country</option>
      {countries.map((country, index) => (
        <option value={country}>{country}</option>
      ))}
    </select>
  );
};

const SelectCity = (props) => {
  const { selectedCity, setSelectedCity, cities } = props;

  return (
    <select value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)}>
      <option disabled selected value>Please select a city</option>
      {cities.map((city, index) => (
        <option value={city}>{city}</option>
      ))}
    </select>
  );
};

export default function SelectCountryAndCity(props) {
  const { countriesAndCities } = props;
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [uniqueId, setUniqueId] = useState(0);

  const countries = Object.keys(countriesAndCities);
  const cities = countriesAndCities[selectedCountry];

  function replaceCountry(newCountry) {
    setSelectedCountry(newCountry);
    setSelectedCity(null);
    setUniqueId(c => c + 1);
    //setUniqueId((c) => c + 1);
    //setUniqueId((c) => { return c + 1 });
  }

  return (
    <div>
      <p>You selected {selectedCountry} / {selectedCity} </p>
      <SelectCountry
        countries={countries}
        selectedCountry={selectedCountry}
        setSelectedCountry={replaceCountry}
      />

      {cities &&
        <SelectCity key={uniqueId}
          cities={cities}
          selectedCity={selectedCity}
          setSelectedCity={setSelectedCity}
        />
      }
    </div>
  );
}

