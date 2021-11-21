const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h2", {}, props.name),
    React.createElement("h3", {}, props.animal),
    React.createElement("h3", {}, props.breed),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Bingo",
      animal: "Dog",
      breed: "Australian Cattle Dog",
    }),
    React.createElement(Pet, {
      name: "Jojo",
      animal: "Cat",
      breed: "Domestic Long Hair",
    }),
    React.createElement(Pet, {
      name: "Kiki",
      animal: "Chicken",
      breed: "Chicken",
    }),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
