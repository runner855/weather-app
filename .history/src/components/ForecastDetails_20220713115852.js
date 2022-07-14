import React from "react";
import moment from "moment";
import "../styles/ForecastDetails.css";
import PropTypes from "prop-types";

const ForecastDetails = ({ forecast }) => {
  const { date, temperature } = forecast;

  const currentDate = moment(date).format(" ddd  Do MMM  ");

  return (
    <div className="forecast-details">
      <div className="forecast-details__date">{`${currentDate}`}</div>
      <div className="forecast-details__temperature__min">{`Min Temperature: ${temperature.min}`}</div>
      <div className="forecast-details__temperature__max">{`Max Temperature: ${temperature.max}`}</div>
    </div>
  );
};

export default ForecastDetails;

ForecastDetails.propTypes = {
  forecast: PropTypes.shape({
    date: PropTypes.number,
    temperature: PropTypes.shape({
      min: PropTypes.number,
      max: PropTypes.number,
    }).isRequired,
  }).isRequired,
};
