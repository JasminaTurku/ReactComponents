import { useState } from "react";
import "./getValue.css";

function GetValue() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [list, setList] = useState([]);
  const hendleSubmit = (e) => {
    e.preventDefault(); //da bi se prikzalo, sporije jer ovako je mng brzo
    console.log(name, email);
    const date = { name, email };
    if (name && email) {
      setList((ls) => [...ls, date]);
      setName("");
      setEmail("");
    }
  };
  return (
    <div className="GetValue">
      <h1> React </h1>
      <form onSubmit={hendleSubmit}>
        <input
          name="name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="input1"
        />
        <input
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input2"
        />
        <button>Add</button>
      </form>
      {list.map((a) => (
        <div>
          <li>{a.name}</li>
          <li>{a.email}</li>
        </div>
      ))}
    </div>
  );
}
export default GetValue;
