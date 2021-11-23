import ReactDOM from "react-dom";
import Pet from "./Pet";
import SearchParams from "./SearchParams";

//const App = () => {
//  return React.createElement("div", {}, [
//    React.createElement("h1", {}, "Adopt Me!"),
//    React.createElement(Pet, {
//      name: "Bingo",
//      animal: "Dog",
//      breed: "Australian Cattle Dog",
//    }),
//    React.createElement(Pet, {
//      name: "Jojo",
//      animal: "Cat",
//      breed: "Domestic Long Hair",
//    }),
//    React.createElement(Pet, {
//      name: "Kiki",
//      animal: "Chicken",
//      breed: "Chicken",
//    }),
//  ]);
//};

const App = () => {
  return (
    <div>
      <h1>"Adopt Me!"</h1>
      <SearchParams />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
