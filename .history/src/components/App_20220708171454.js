import "../styles/App.css";
import React from "react";
import PropTypes from "prop-types";
import LocationDetails from "./LocationDetails";

const App = (props) => {
  console.log(props);
  const { location } = props;
  return (
    <div className="App">
      <LocationDetails city={location.city} country={location.country} />
    </div>
  );
};

export default App;

App.propTypes = {
  location: PropTypes.shape({
    city: PropTypes.string,
    country: PropTypes.string,
  }).isRequired,
};
