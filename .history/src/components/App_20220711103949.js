import "../styles/App.css";
import React from "react";
import PropTypes from "prop-types";
import LocationDetails from "./LocationDetails";
import ForecastSummary from "./ForecastSummary";

const App = (props) => {
  const { location, forecasts } = props;
  console.log(props);
  return (
    <div className="App">
      <LocationDetails city={location.city} country={location.country} />
      <ForecastSummary description={forecasts[0] />
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
