import { Component } from "react";

class Carousel extends Component {
  state = {
    active: 0,
  };

  // in case no image props are given
  static defaultProps = {
    images: ["http://pets-images.dev-apis.com/pets/none.jpg"],
  };

  //Interactive class component: Add event listener
  handleIndexClick = (event) => {
    this.setState({
      // + turns a string into a number
      active: +event.target.dataset.index,
    });
  }

  render() {
    //state is mutable
    const { active } = this.state;
    // data flowing down from parent; cannot be changed
    const { images } = this.props;

    return (
      <div className="carousel">
        <img src={images[active]} alt="animal" />
        <div className="carousel-smaller">
          {images.map((photo, index) => (
            //eslint-disable-next-line
            <img
              key={photo}
              src={photo}
              data-index={index}
              onClick={this.handleIndexClick}
              //if selected, put an active class
              className={index === active ? "active" : ""}
              alt="animal thumbnail"
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
