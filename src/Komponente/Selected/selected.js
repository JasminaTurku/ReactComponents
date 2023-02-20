import "./selected.css";
import React, { useState } from "react";

function Selected() {
  const [selects, setSelects] = useState();
  return (
    <div>
      <h1>{selects}</h1>
      <select value={selects} onChange={(e) => setSelects(e.target.value)}>
        <option>Apple</option>
        <option>Mango</option>
        <option>Orange</option>
      </select>
    </div>
  );
}

export default Selected;
