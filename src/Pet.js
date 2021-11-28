import { Link } from "react-router-dom";

const Pet = ({ name, animal, breed, images, location, id }) => {
  let hero = "http://pets-images.dev-apis.com/pets/none.jpg";

  if (images.length) {
    hero = images[0];
  }

  return (
    <Link to={`/details/${id}`} className="pet">
      <div className="image-container">
        <img src={hero} alt={name} />
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h2>{`${animal} - ${breed} - ${location}`}</h2>
      </div>
    </Link>
  );
};

export default Pet;



//BEFORE
//const Pet = () => {
//  return React.createElement("div", {}, [
//    React.createElement("h1", {}, "Luna"),
//    React.createElement("h2", {}, "Dog"),
//    React.createElement("h2", {}, "Havanese"),
//  ]);
//};
//
//const App = () => {
//  return React.createElement("div", {}, [
//    React.createElement("h1", {}, "Adopt Me!"),
//    React.createElement(Pet),
//    React.createElement(Pet),
//    React.createElement(Pet),
//  ]);
//};
//
//ReactDOM.render(React.createElement(App), document.getElementById("root"));
