import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <div className="Search">
      <form>
        <input
          type="search"
          placeholder="Ex. Weasley, spells"
          className="search"
        />
        <input type="submit" value="Search" className="submit" />
      </form>
    </div>
  );
}
