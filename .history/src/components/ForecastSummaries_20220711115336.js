import React from "react";
import PropTypes from "prop-types";
import forecast from "../data/forecast.json";
import ForecastSummary from "./ForecastSummary";

const ForecastSummaries = (props) => {
  console.log(props);
  const { date } = props;
  return <h1>{`${date}`}</h1>;
};

export default ForecastSummaries;

ForecastSummaries.propTypes = {
  date: PropTypes.number.isRequired,
};
