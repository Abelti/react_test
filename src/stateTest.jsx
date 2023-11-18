import React, { useState } from "react";

export default function StateTest() {
  const [state, setState] = useState('');
  const [name, setName] = useState("Ethiopia");
  const [type, setType] = useState("Human");

  
    //code
    //let val = <h1>{e.target.value}</h1>;
  

  return (
    <div onClick={ () => {setName("Adama")}}>
      {name}
      {name}<br/>
      <input value={state} onChange={ (e) => {setState(e.target.value)}}/><br/>
      <input value={state}/>
    </div>
  );
}
