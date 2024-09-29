import { useState } from "react";

const countries = [
  {
    name: "India",
    value: "0",
    cities: [{ name: "Mumbai" }, { name: "Pune" }, { name: "Nashik" }],
  },
  {
    name: "Australia",
    value: "1",
    cities: [{ name: "Sydney" }, { name: "Canberra" }, { name: "Adelaide" }],
  },
  {
    name: "England",
    value: "2",
    cities: [{ name: "London" }, { name: "Brsitol" }, { name: "Manchestor" }],
  },
];

function Home() {
  const [country, setCountry] = useState("0");

  return (
    <div classname="App">
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <select
        onChange={(e) => {
          alert(e.target.value);
          setCountry(e.target.value);
        }}
      >
        {countries.map((item, index) => {
          return <option value={item.value}>{item.name}</option>;
        })}
      </select>
      <select>
        {countries[country].cities.map((item, index) => {
          return <option value={item.name}>{item.name}</option>;
        })}
      </select>
    </div>
  );
}

export default Home;
