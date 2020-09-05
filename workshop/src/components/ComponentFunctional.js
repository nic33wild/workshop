import React, { useState, useEffect } from "react";

//COMPONENTE FUNZIONE
export const ComponentFunctional = ({ firstprops, secondprops }) => {
  const [name, setNome] = useState("Nicola");

  useEffect(() => {
    console.log("Test useEffect");

    //La funzione ritornata dallo use effect corrisponde al component WillUnMount
    return () => console.log("WillUnMount");
  }, [name]);

  const onClick = () => setNome("Trentini");
  return (
    <>
      <h2>FUNCTIONAL COMPONENT</h2>
      <p>
        {firstprops}
        {secondprops}
      </p>
      <button onClick={onClick}>{name}</button>
    </>
  );
};
