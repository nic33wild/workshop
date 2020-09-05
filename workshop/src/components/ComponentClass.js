import React from "react";

export class ComponentClass extends React.Component {
  //VECCHIA SINTASSI CON COSTRUTTORE e metodi bindati
  // constructor() {
  //   super();
  //   this.state = {
  //     name: "Nicola"
  //   };
  //   this.onClick = this.onClick.bind(this);
  // }

  //NUOVA SINTASSI SENZA COSTRUTTORE e metodi con arrow function
  state = {
    name: "Nicola",
    surname: "Trentini",
    age: 36
  };

  componentDidMount() {
    console.log("ComponentDidMount");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log({ prevProps, prevState });
  }

  onClick = () => {
    console.log(this.state.name);
  };

  render() {
    const { firstprops, secondprops } = this.props;
    return (
      <>
        <h2>CLASS COMPONENT</h2>
        <p>
          {firstprops}
          {secondprops}
        </p>
        {/* <button onClick={() => this.setState({ name: "Nicola Trentini" })}> */}
        <button onClick={this.onClick}>{this.state.name}</button>
      </>
    );
  }
}
