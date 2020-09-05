import React from "react";
import { useSelector } from "react-redux";

export const selectorList = store => store.list;

export const selectorQuery = store => store.query;

export const List = () => {
  const list = useSelector(selectorList);
  const query = useSelector(selectorQuery);

  const renderList = element => {
    const isVisible = element.includes(query);

    // if (element.includes(query)) return <div>{element}</div>;
    return (
      <div style={{ display: isVisible ? "block" : "none" }}>{element}</div>
    );
  };
  return <>{list && list.map(renderList)} </>;
};

// const mapStateToProps = store => ({
//   list: selectorList(store),
//   query: selectorQuery(store)
// });

// export default connect(mapStateToProps)(List);
