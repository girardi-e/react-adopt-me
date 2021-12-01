import { Component } from "react";
import { Link } from "react-router-dom";

//Error boundaries work like a JavaScript catch {} block, but for components.
class ErrorBoundary extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { hasError: false };

  state = { hasError: false };

  // Update state so the next render will show the fallback UI.
  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    //log this error to an error monitoring service such as Sentry, Azure,
    //Relic, TrackJS
    console.error("ErrorBoundary caught an error,", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <h2>
          There was an error with this listing. <Link to="/">Click here</Link>{" "}
          to go back to the home page or wait five seconds.
        </h2>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
