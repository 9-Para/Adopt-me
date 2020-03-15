import React from "react";
import { render } from "react";
import Pet from "./Pet";
const App = () => {
   return React.createElement("div", { id: "Something important" }, [
      React.createElement("h1", {}, "Adopt Me!"),
      React.createElement(Pet, {
         name: "Luna",
         animal: "Dog",
         breed: "Havanese"
      }),

      React.createElement(Pet, {
         name: "pepper",
         animal: "Bird",
         breed: "cocktail"
      }),
      React.createElement(Pet, {
         name: "Doink",
         animal: "Cat",
         breed: "mixed"
      })
   ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
