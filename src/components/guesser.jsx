import React from "react";
import Nationalities from "./nationalities";
import countriesJson from "../assets/countries.json";
import Loader from "./loader";
import styles from '../styles/guesser.module.css'

const baseUrl = "https://api.nationalize.io/?name=";

const Guesser = () => { 
  const [guess, setGuess] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const getGuess = (name) => {
    setLoading(true);
    setGuess(null)
    fetch(`${baseUrl}${name}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.name) {
          const { name, country } = data;

          country.forEach((country) => {
            country.name = countries.find(
              (e) => e.code === country.country_id
            ).name;
          });

          const newGuess = {
            name,
            country,
          };

          return newGuess
        } else {
          setGuess(null);
        }
      })
      .then((n) => setGuess(n))
      .then(() => setLoading(false));
  };
 
  const handleSubmit = async (e) => {
    e.preventDefault(); 
    getGuess(searchValue.current.value);
  };

  const [countries, setCountries] = React.useState([]);

  React.useEffect(() => {
    setCountries(countriesJson);
  }, []);

  const searchValue = React.useRef("");
  
  return (
    <div className="container">
      <div className="d-flex justify-content-center m-2">
          <h2 className="fw-bold">
            Insert your name and I'll try to guess a couple of things about you
          </h2>
      </div>
      <div className="row justify-content-center">
        <div className="col justify-content-center d-flex">
          <form
            onSubmit={handleSubmit}
            className="d-flex justify-content-center my-2"
          >
            <input placeholder="Ex: Arthur" type="text" id="name" ref={searchValue} required/>
            <button className={`btn search mx-2 ${styles.search}`}>Search</button>
          </form>
        </div>
      </div>
      <div className="row justify-content-center">
        {loading && <Loader/>}
      </div>
      <div className="row">
        <div className="col">{guess && <Nationalities {...guess} />}</div>
      </div>
    </div>
  );
};

export default Guesser;
