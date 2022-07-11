import React from "react";
import ForecastSummary from "../components/ForecastSummary";
import PropTypes from "prop-types";

const ForecastSummaries = ({ forecasts }) => {
  console.log(props);
  return <div className="forecast-summaries">
    {forecasts.map(forecast => (
      <ForecastSummary />
    )
    )}
  </div>;
};

export default ForecastSummaries;

ForecastSummaries.propTypes = {
  date: PropTypes.number.isRequired,
};
