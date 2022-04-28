import { useEffect, useState } from "react";

const ageBaseUrl = "https://api.agify.io/?name=";
const genderBaseUrl = "https://api.genderize.io/?name=";

const Nationalities = ({ name, country }) => {
  const [age, setAge] = useState(null);
  const [gender, setGender] = useState(null);

  useEffect(() => {
    async function getAge() {
      const res = await fetch(`${ageBaseUrl}${name}`);
      const data = await res.json();
      setAge(data.age);
    }

    async function getGender() {
      const res = await fetch(`${genderBaseUrl}${name}`);
      const data = await res.json();

      if (data.gender === "female") {
        setGender(<i className="bi bi-gender-female text-danger"></i>);
      } else if (data.gender === "male") {
        setGender(<i className="bi bi-gender-male text-primary"></i>);
      }
    }

    getAge();
    getGender();
  }, [name]);

  return (
    <div className="container mb-5">
      {country.length < 1 ? (
        <h3 className="text-center m-2">
          Sorry, but we couldn't find data about this name!
        </h3>
      ) : (
        <div className="div">
          <h2 className="fw-b m-2">
            {name.charAt(0).toUpperCase() + name.slice(1)} - {age} years -{" "}
            {gender}
          </h2>
          <h4 className="fw-bold mt-3">Nationality</h4>
        </div>
      )}
      <ul className="list-group">
        {country.map((e, index) => {
          return (
            <li className="list-group-item" key={index}>
              <span className="fw-b">{e.name} - </span>
              <span className="fw-b">{(e.probability * 100).toFixed(2)}%</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Nationalities;
