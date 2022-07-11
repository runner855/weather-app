import React from "react";
import forecast from "../data/forecast.json";
import ForecastSummary from "./ForecastSummary";

const ForecastSummaries = (props) => {
  const { date } = props;
  return <ForecastSummary />;
};

export default ForecastSummaries;
