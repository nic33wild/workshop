import React from "react";

import "./App.css";
import { List } from "./components/List";

import { useSearchbar, Searchbar } from "./components/Searchbar";
import { ComponentClass } from "./components/ComponentClass";
import { ComponentFunctional } from "./components/ComponentFunctional";

export const App = () => {
  const [query, onChange] = useSearchbar();

  return (
    <>
      <Searchbar onChange={onChange} value={query} />
      <List />
      {/* {(query === "mostra" && <div>ECCOMI</div>) || <div>CIAO</div>} */}
      {query === "mostra" ? <div>ECCOMI</div> : <div>CIAO</div>}
      <ComponentClass firstprops="Prima" secondprops="Seconda" />
      <ComponentFunctional firstprops="Prima" secondprops="Seconda" />
    </>
  );
};

// const list = ["Example 1", "Example 2"];

// export const App = () => {
//   // const [query, setQuery] = useState("");

//   //Il doppio punto escalamativo trasforma in variabile booleana
//   // const boolean = !!query;

//   // const onChange = event => setQuery(event.target.value);

//   // const renderList = element => {
//   //   if (element.includes(query)) return <div>{element}</div>;
//   //   return null;
//   // };

//   return (
//     <>
//       {/* {list.length ? list.map(renderList) : null} */}
//       {/* {list && list.map(renderList)} */}
//       {/* <Searchbar onChange={onChange} query={query} />
//       <List query={query} /> */}
//     </>
//   );
// };
