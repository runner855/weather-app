import "../styles/App.css";
import React, { useState } from "react";
import PropTypes from "prop-types";
import LocationDetails from "./LocationDetails";
import ForecastSummaries from "./ForecastSummaries";
import ForecastDetails from "./ForecastDetails";

const App = ({ location, forecasts }) => {
  const [selectedDate, setSelectedDate] = useState(forecasts[0].date);

  const selectedForecast = forecasts.find(
    (forecast) => forecast.date === selectedDate
  );
  return (
    <div className="weather-app">
      <LocationDetails city={location.city} country={location.country} />
      <ForecastDetails forecast={selectedForecast} />
      <ForecastSummaries forecasts={forecasts} />
    </div>
  );
};

export default App;

App.propTypes = {
  forecasts: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.number,
      description: PropTypes.string,
      icon: PropTypes.string,
      temperature: PropTypes.shape({
        max: PropTypes.number,
        min: PropTypes.number,
      }),
    })
  ).isRequired,
  location: PropTypes.shape({
    city: PropTypes.string,
    country: PropTypes.string,
  }).isRequired,
};
