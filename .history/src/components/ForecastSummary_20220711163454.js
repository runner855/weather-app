import React from "react";
import moment from "moment";
import "../styles/ForecastSummary.css";
import WeatherIcon from "react-icons-weather";
import PropTypes from "prop-types";

const ForecastSummary = (props) => {
  const { date, description, icon, temperature } = props;
  const currentDate = moment(date).format("MMM Do YYYY");
  return (
    <div className="forecast-summary">
      <div className="forecast-summary__date">{`${currentDate}`}</div>
      <div className="forecast-summary__icon">{`${icon}`}</div>
      <div className="forecast-summary__temperature">
        {`${temperature.max}`}
        &deg;C
      </div>
      <div className="forecast-summary__description">{`${description}`}</div>
    </div>
  );
};

export default ForecastSummary;

ForecastSummary.propTypes = {
  date: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  temperature: PropTypes.shape({
    min: PropTypes.number,
    max: PropTypes.number,
  }).isRequired,
};
