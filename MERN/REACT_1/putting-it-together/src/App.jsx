import React, { Component } from "react";
import Cards from "./components/Cards";
import profileCards from "./data/Cards";

export class App extends Component {
  render() {
    return (
      <div className="container border border-primary my-3">
        {profileCards.map((card, idx) => {
          return (
            <Cards
              key={idx}
              firstName={card.firstName}
              lastName={card.lastName}
              age={card.age}
              hairColor={card.hairColor}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
