import React from "react";
import ForecastSummary from "../components/ForecastSummary";
import PropTypes from "prop-types";

const ForecastSummaries = (props) => {
  console.log(props);
  const { date } = props;
  return <div className="forecast-summaries">{`${date}`}</div>;
};

export default ForecastSummaries;

ForecastSummaries.propTypes = {
  date: PropTypes.number.isRequired,
};
