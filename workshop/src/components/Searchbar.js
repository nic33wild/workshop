import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectorQuery } from "./List";

//CUSTOM HOOK
export const useSearchbar = () => {
  const query = useSelector(selectorQuery);
  const dispatch = useDispatch();

  const onChange = event =>
    dispatch({ type: "ON_CHANGE", payload: event.target.value });

  return [query, onChange];
};

//UI
export const Searchbar = ({ value, onChange }) => {
  return <input onChange={onChange} value={value} />;
};

// export const ConnectedSearchbar = () => {
//   const [query, onChange] = useSearchbar();
//   return <UISearchbar onChange={onChange} value={query} />;
// };

// const mapDispatchToProps = {
//   onChange: event => ({ type: "ON_CHANGE", payload: event.target.value })
// };
