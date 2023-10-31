import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;

function App() {
  const [location, setLocation] = useState({});
  const [search, setSearch] = useState("");

  function handleChange(event) {

    setSearch(event.target.value)
  }

  async function getLocation(event) {
    event.preventDefault();

    const API = `https://eu1.locationiq.com/v1/search?q=${search}&key=${API_KEY}&format=json`;

    const res = await axios.get(API);

    setLocation(res.data[0]);

    
  }

  return (
    <>
      {location}
      <form onSubmit={getLocation}>
        <input onChange={handleChange} type="text" placeholder="Location"/>
        <button>Get Location</button>
      </form>
    </>
  );
}

export default App;