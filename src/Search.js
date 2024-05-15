import React, { useState } from "react";
import axios from "axios";
import "./Search.css";

export default function Search() {
  let [value, setValue] = useState(null);
  let apiUrl = `https://potterapi-fedeperin.vercel.app/en/${value}/max`;

  function handleResponse(response) {
    console.log(response.data);
  }

  function handleChange(event) {
    setValue(event.target.value);
  }

  function handleEvent(event) {
    event.preventDefault();
    console.log(value);

    axios.get(apiUrl).then(handleResponse);
  }
  return (
    <div className="Search">
      <form onSubmit={handleEvent}>
        <input
          type="search"
          placeholder="Ex. Weasley, spells"
          className="search"
          onChange={handleChange}
        />
        <input type="submit" value="Search" className="submit" />
      </form>
    </div>
  );
}
