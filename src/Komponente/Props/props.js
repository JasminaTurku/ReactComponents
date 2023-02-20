import { useState } from "react";
import "./props.css";
import PageOne from "./pageone";

function Props() {
  const [names] = useState("assaa");
  return (
    <div className="Props">
      <h1>Props in React</h1>
      <PageOne name={names} />
    </div>
  );
}
export default Props;
