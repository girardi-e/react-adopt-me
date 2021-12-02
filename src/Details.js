import { Component } from "react";
import { withRouter } from "react-router-dom";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";
import ThemeContext from "./ThemeContext";

// Replace constructor with class component
class Details extends Component {
  //working with state: changed Parcel and Babel config to be able to do this
  state = { loading: true };

  //BEFORE
  //  constructor() {
  //    super();
  //    this.state = { loading: true };
  //  }

  //This gets rendered after the component is rendered for the first time: This is similar to useEffect
  async componentDidMount() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?id=${this.props.match.params.id}`
    );
    const json = await res.json();

    this.setState(
      //Passing the date retrieved into an object
      Object.assign(
        {
          loading: false,
        },
        json.pets[0]
      )
    );
  }

  // ANOTHER WAY TO DO IT
  //  this.setState({
  //    loading: false,
  //    name: json.pets[0].name,
  //    breed: json.pets[0].breed,
  //    animal: json.pets[0].animal,
  //  })

  render() {
    if (this.state.loading) {
      return <h2>Loading ...</h2>;
    }
    //destruct object
    const { animal, breed, city, state, description, name, images } =
      this.state;

    return (
      <div className="details">
        <Carousel images={images} />
        <div>
          <h1>{name}</h1>
          <h2>
            {animal} - {breed} {city}, {state}
          </h2>

          {/* Context with class components */}
          <ThemeContext.Consumer>
            {([theme]) => (
              <button style={{ backgroundColor: theme }}>Adopt {name}</button>
            )}
          </ThemeContext.Consumer>

          <p>{description}</p>
        </div>
      </div>
    );
  }
}

//Higher-order components: Add functionality but don't display.
const DetailsWithRouter = withRouter(Details);

export default function DetailsWithErrorBoundary() {
  return (
    <ErrorBoundary>
      <DetailsWithRouter />
    </ErrorBoundary>
  );
}
