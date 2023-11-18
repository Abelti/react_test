import React from "react";
import Input from "./input";
import StateTest from "./stateTest";

export default function Test(props) {
  const var1 = <h1>I LOVE JSX</h1>;
  const var2 = <h1>React is {var1} times better with JSX</h1>;
  const var3 = (
    <ul>
      <li>Apples</li>
      <li>Bananas</li>
      <li>Cherries</li>
    </ul>
  );
  const x = 5;
  let text = "Greater than 10";
  if (x < 10) {
    text = "Less than 10";
  }

  const var4 = <h1>{text}</h1>; //jsx
  const var5 = <h1>{ (x) < 10 ? "less than ten" : "the value is ten" }</h1>;
  //const var6 = <h1>(if (x < 10) {{text = "Less than 10" }} )</h1>;
  const products = ['orange', 'apple', 'watermelon', 'Banana'];

  const listJSX = []

  for (const [i, product] of products.entries()) {
    listJSX.push(<h3>{product}</h3>)

  }
  return (
/*     <!-->
      test
      {var1}
      {var2}
      {var3}
      {var4}
      {var5}
      {listJSX}
      <h1--> My name is {props.name} and I am a {props.type}</h1-->
      <StateTest/>
    <--> */
    <StateTest/>

  );
}
