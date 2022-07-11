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
      <ForecastSummary
        description={forecasts[0].description}
        date={forecasts[0].date}
      />
    </div>
  );
};

export default App;

App.propTypes = {
  location: PropTypes.shape({
    city: PropTypes.string,
    country: PropTypes.string,
  }).isRequired,
  forecasts: PropTypes.shape({
    date: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    temperature: PropTypes.shape({
      min: PropTypes.number,
      max: PropTypes.number,
    }).isRequired,
  }).isRequired,
};
