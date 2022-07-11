import React from "react";
import ForecastSummary from "../components/ForecastSummary";
import PropTypes from "prop-types";

const ForecastSummaries = ({ forecasts }) => {
  return (
    <div className="forecast-summaries">
      {forecasts.map(forecast => (
        <ForecastSummary
          date={forecast.date}
          description={forecast.description}
          icon={forecast.icon}
          temperature={forecast.temperature}
        />
      ))}
    </div>
  )
};

export default ForecastSummaries;

ForecastSummaries.propTypes = {
  date: PropTypes.number.isRequired,
};
